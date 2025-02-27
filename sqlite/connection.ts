import { DatabaseSync } from "node:sqlite";

/** 
 * Synchronous SQLite database instance. 
 * Must be closed with `.close()` after use. 
 */
export const db = new DatabaseSync(<string>Deno.env.get("DB_PATH"));
