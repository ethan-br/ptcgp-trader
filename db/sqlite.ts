import { DatabaseSync } from "node:sqlite";

// db.exec(await Deno.readTextFile("./db/scripts/schema.sql"));
// db.exec(await Deno.readTextFile("./db/scripts/expansions.sql"));
// db.exec(await Deno.readTextFile("./db/scripts/exp_A1.sql"));
// db.exec(await Deno.readTextFile("./db/scripts/exp_A1a.sql"));
// db.exec(await Deno.readTextFile("./db/scripts/exp_A2.sql"));

export function queryDB() {
  const db = new DatabaseSync("./db/sqlite.db");
  const rows =  <Card[]> db.prepare("SELECT * FROM card").all();
  console.log(rows);
  db.close();
  return rows
}

export interface Card {
    expansion_code: string,
    card_number: number,
    name: string,
    rarity: string
}