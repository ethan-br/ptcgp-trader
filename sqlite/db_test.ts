import { assertEquals } from "@std/assert";
import { openDB } from "./connection.ts";
import { applyMigrations } from "./migration.ts";
import { Expansion } from "./types.ts";

// db must be migrated/seeded
Deno.test("db test 1", async () => {
    const db = openDB();
    await applyMigrations(db);
    const rows: Expansion[] = <Expansion[]> db.prepare("SELECT * FROM expansion").all();
    db.close();
    assertEquals(rows.length, 3);
});

// db must be migrated/seeded
Deno.test("db test 2", async () => {
    const db = openDB();
    await applyMigrations(db);
    const rows = db.prepare(`SELECT
    p1.player_id AS player1_id,
    p1.name AS player1_name,
    CONCAT(c1.expansion_code, '-', c1.card_number) AS player1_card_id,
    card1.name AS player1_card_name,
    card1.rarity AS rarity,
    p2.player_id AS player2_id,
    p2.name AS player2_name,
    CONCAT(c2.expansion_code, '-', c2.card_number) AS player2_card_id,
    card2.name AS player2_card_name
FROM
    collection c1
JOIN card card1 
    ON c1.expansion_code = card1.expansion_code 
    AND c1.card_number = card1.card_number
JOIN player p1 
    ON c1.player_id = p1.player_id
JOIN collection c2 
    ON c1.player_id <> c2.player_id  -- Different players
JOIN card card2 
    ON c2.expansion_code = card2.expansion_code 
    AND c2.card_number = card2.card_number
JOIN player p2 
    ON c2.player_id = p2.player_id
WHERE
    card1.rarity = card2.rarity  -- Same rarity
    AND c1.quantity > 1  -- Player 1 can spare the card
    AND c2.quantity > 1  -- Player 2 can spare the card
ORDER BY
    player1_id, player2_id, player1_card_id, player2_card_id;`).all();
    db.close();
    console.log(rows);
    assertEquals(rows.length, 2);
});
