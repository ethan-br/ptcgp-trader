import { assertEquals } from "@std/assert";
import { db } from "./connection.ts";
import { Expansion } from "./types.ts";
import { applyMigrations } from "./migration.ts";

// db must be migrated/seeded
Deno.test("db test 1", async () => {
    await applyMigrations(db)
    const rows: Expansion[] = <Expansion[]>db.prepare("SELECT * FROM expansion").all();
    db.close();
    assertEquals(rows.length, 3);
});
