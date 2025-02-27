import { DatabaseSync } from "node:sqlite";

interface MigrationId {
    index: number;
    name: string;
}

interface Migration {
    id: MigrationId;
    up: string;
    down: string;
}

interface Migrations {
    migrationArr: Migration[];
    /**
     * Index incluced
     */
    appliedUpToIndex: MigrationId | null;
}

/**
 * Reads a migration file and extracts the UP and DOWN SQL code.
 * @param filePath - The path to the migration file.
 * @returns An object containing the UP and DOWN migration codes.
 */
async function readMigrationFile(dirPath: string, fileName: string): Promise<Migration | null> {
    try {
        const text = await Deno.readTextFile(dirPath + fileName);
        // console.log(text);

        const match = text.match(/-- MIGRATION: UP\s+([\s\S]*?)\s+-- MIGRATION: DOWN\s+([\s\S]*)/);

        if (!match) {
            throw new Error("Invalid migration file format");
        }

        return {
            id: {
                index: parseInt(fileName.substring(0, 4), 10),
                name: fileName.substring(4).replace(".sql", ""),
            },
            up: match[1].trim(),
            down: match[2].trim(),
        };
    } catch (error) {
        console.error("Error reading migration file:", error);
        return null;
    }
}

function sortMigrations(migrations: Migrations): void {
    migrations.migrationArr.sort((a, b) => a.id.index - b.id.index);
}

/**
 * Reads and parses all migration files from the specified directory.
 *
 * This function scans the given directory for SQL migration files that match
 * the naming pattern `XXX-name.sql`, where `XXX` is a three-digit number.
 * It then reads and extracts the migration details from each valid file.
 *
 * @param {string} path - The path to the directory containing migration files. Default is "sqlite/migrations/".
 * @returns {Promise<Migrations>} A promise resolving to an object containing:
 *   - `migrationArr`: An array of parsed migration objects.
 *   - `appliedUpTo`: The last applied migration (or `null` if none).
 */
async function readMigrationsDir(path: string = "sqlite/migrations/") {
    const migrations: Migrations = {
        migrationArr: [],
        appliedUpToIndex: null,
    };
    for await (const dirEntry of Deno.readDir(path)) {
        if (dirEntry.isFile && /^\d{3}-.+\.sql$/.test(dirEntry.name)) {
            const curr_migration = await readMigrationFile(path, dirEntry.name);
            if (curr_migration) {
                migrations.migrationArr.push(curr_migration);
            }
        }
    }
    sortMigrations(migrations);
    return migrations;
}

function execMigration(db: DatabaseSync, migration: Migration) {
    try {
        db.exec(migration.up);
        console.log(`✅ Successfully applied migration ${migration.id.name}`);
    } catch {
        console.log(`❌ Could not apply migration ${migration.id.name}`);
        return false;
    }
    return true;
}

export async function applyMigrations(db: DatabaseSync) {
    const migrations = await readMigrationsDir();
    console.log(`There are ${migrations.migrationArr.length} migrations`);
    for (const m of migrations.migrationArr) {
        if (execMigration(db, m)) {
            migrations.appliedUpToIndex = m.id;
        } else {
            console.log("🛑 Migration stopped");
            return;
        }
    }
}
