import { assertEquals } from "@std/assert";
import { db } from "./connection.ts";
import { Expansion } from "./types.ts";

// db must be migrated/seeded
Deno.test("db test 1", () => {
    console.log(Deno.env.get("DB_PATH"));
    const rows: Expansion[] = <Expansion[]>db.prepare("SELECT * FROM expansion").all();
    db.close();
    console.log(rows);
    assertEquals(rows.length, 3);
});
