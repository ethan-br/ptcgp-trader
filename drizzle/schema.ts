import { sqliteTable, AnySQLiteColumn, foreignKey, primaryKey, check, text, integer } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const card = sqliteTable("card", {
	expansionCode: text("expansion_code").notNull().references(() => expansion.expansionCode),
	cardNumber: integer("card_number").notNull(),
	name: text().notNull(),
	rarity: text().notNull(),
},
(table) => [
	primaryKey({ columns: [table.expansionCode, table.cardNumber], name: "card_expansion_code_card_number_pk"}),
	check("card_check_1", sql`card_number >= 0`),
	check("card_check_2", sql`rarity IN ('♢', '♢♢', '♢♢♢', '♢♢♢♢', '☆'`),
	check("collection_check_3", sql`card_number >= 0`),
	check("collection_check_4", sql`quantity >= 0`),
	check("expansion_check_5", sql`num_cards >= 0`),
]);

export const player = sqliteTable("player", {
	playerId: integer("player_id").primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	friendId: text("friend_id").notNull(),
},
(table) => [
	check("card_check_1", sql`card_number >= 0`),
	check("card_check_2", sql`rarity IN ('♢', '♢♢', '♢♢♢', '♢♢♢♢', '☆'`),
	check("collection_check_3", sql`card_number >= 0`),
	check("collection_check_4", sql`quantity >= 0`),
	check("expansion_check_5", sql`num_cards >= 0`),
]);

export const collection = sqliteTable("collection", {
	playerId: integer("player_id").notNull().references(() => player.playerId, { onDelete: "cascade" } ),
	expansionCode: text("expansion_code").notNull(),
	cardNumber: integer("card_number").notNull(),
	quantity: integer().default(0).notNull(),
},
(table) => [
	foreignKey(() => ({
			columns: [table.expansionCode, table.cardNumber],
			foreignColumns: [card.expansionCode, card.cardNumber],
			name: "collection_expansion_code_card_number_card_expansion_code_card_number_fk"
		})).onDelete("cascade"),
	primaryKey({ columns: [table.playerId, table.expansionCode, table.cardNumber], name: "collection_player_id_expansion_code_card_number_pk"}),
	check("card_check_1", sql`card_number >= 0`),
	check("card_check_2", sql`rarity IN ('♢', '♢♢', '♢♢♢', '♢♢♢♢', '☆'`),
	check("collection_check_3", sql`card_number >= 0`),
	check("collection_check_4", sql`quantity >= 0`),
	check("expansion_check_5", sql`num_cards >= 0`),
]);

export const expansion = sqliteTable("expansion", {
	expansionCode: text("expansion_code").primaryKey().notNull(),
	name: text().notNull(),
	numCards: integer("num_cards").notNull(),
},
(table) => [
	check("card_check_1", sql`card_number >= 0`),
	check("card_check_2", sql`rarity IN ('♢', '♢♢', '♢♢♢', '♢♢♢♢', '☆'`),
	check("collection_check_3", sql`card_number >= 0`),
	check("collection_check_4", sql`quantity >= 0`),
	check("expansion_check_5", sql`num_cards >= 0`),
]);

