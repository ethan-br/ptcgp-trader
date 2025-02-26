import { relations } from "drizzle-orm/relations";
import { expansion, card, collection, player } from "./schema.ts";

export const cardRelations = relations(card, ({one, many}) => ({
	expansion: one(expansion, {
		fields: [card.expansionCode],
		references: [expansion.expansionCode]
	}),
	collections: many(collection),
}));

export const expansionRelations = relations(expansion, ({many}) => ({
	cards: many(card),
}));

export const collectionRelations = relations(collection, ({one}) => ({
	card: one(card, {
		fields: [collection.expansionCode],
		references: [card.expansionCode]
	}),
	player: one(player, {
		fields: [collection.playerId],
		references: [player.playerId]
	}),
}));

export const playerRelations = relations(player, ({many}) => ({
	collections: many(collection),
}));