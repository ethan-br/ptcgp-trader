import { assertEquals } from "jsr:@std/assert";
import { db } from "./connection.ts";
import { expansion } from "./schema.ts";
import { seed_db } from "./seed.ts";

Deno.test("expansion test 1", async () => {
    //seed_db();
    const exps = await db.select().from(expansion)
    console.log(exps)
    assertEquals(exps.length, 3)
})