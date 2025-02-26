import "@std/dotenv/load";

import { assertEquals } from "@std/assert";
import { Prisma, prisma } from "./prisma/client.ts";

Deno.test(async function test() {
    const findManyArgs: Prisma.UserFindManyArgs = {
        where: { name: { contains: "John" } },
    };

    const users = await prisma.user.findMany(findManyArgs);

    assertEquals(users, []);
});
