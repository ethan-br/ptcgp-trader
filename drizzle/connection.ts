import { drizzle } from "drizzle-orm/libsql/node";

export const db = drizzle({
  connection: {
    url: Deno.env.get("DB_URL")!,
    authToken: Deno.env.get("DB_AUTH_TOKEN"),
  },
});