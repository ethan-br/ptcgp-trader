import { db } from "./connection.ts";
import { card, expansion } from "./schema.ts";

export async function seed_db() {
    await db.insert(expansion).values(
        [
            { expansionCode: "A1", name: "Genetic Apex", numCards: 286 },
            { expansionCode: "A1a", name: "Mythical Island", numCards: 86 },
            { expansionCode: "A2", name: "Space-Time Smackdown", numCards: 207 },
        ],
    );
}
