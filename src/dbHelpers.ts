import { openDB } from "../sqlite/connection.ts";
import { Player, PlayerNoId } from "../sqlite/types.ts";

export function addPlayer({ username, password_hash, friend_id }: PlayerNoId) {
    const db = openDB();
    db.prepare(`
        INSERT INTO
            player (username, password_hash, friend_id)
        VALUES
            (?, ?, ?);
    `).run(username, password_hash, friend_id);
}

export function getPlayerId(username: string, password_hash: string): number {
    const db = openDB();
    const rows: Player[] = <Player[]> db.prepare(`
        SELECT * FROM player
        WHERE username = ? AND password_hash = ?;
    `).all(username, password_hash);
    console.log(rows);
    return rows.length > 0 ? rows[0].player_id : -1;
}

export function getPlayerById(playerId: number): Player {
    const db = openDB();
    const row: Player = <Player> db.prepare(`
        SELECT * FROM player
        WHERE player_id = ?;
    `).get(playerId);
    return row;
}

// getPlayerId("Bob", "password");
