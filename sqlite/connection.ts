import { DatabaseSync } from "node:sqlite";

/**
 * Opens and returns a synchronous SQLite database instance.
 *
 * The database instance is created using the path specified in the environment variable `DB_PATH`.
 * It is **important** to close the database with the `.close()` method after usage to avoid memory leaks or file locking issues.
 *
 * @returns {DatabaseSync} A synchronous SQLite database instance.
 *
 * @throws An error if the `DB_PATH` environment variable is not defined or the database connection fails.
 */
export function openDB() {
    return new DatabaseSync("local.db");
}
