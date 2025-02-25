PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS card (
	expansion_code TEXT NOT NULL,
	card_number INTEGER NOT NULL CHECK(card_number >= 0),
	name TEXT NOT NULL,
	rarity TEXT NOT NULL CHECK(rarity IN ('♢', '♢♢', '♢♢♢', '♢♢♢♢', '☆')),
	PRIMARY KEY (expansion_code, card_number),
	FOREIGN KEY (expansion_code) REFERENCES expansion(expansion_code)
);

CREATE TABLE IF NOT EXISTS player (
	player_id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	friend_id TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS collection (
	player_id INTEGER NOT NULL,
	expansion_code TEXT NOT NULL,
	card_number INTEGER NOT NULL CHECK(card_number >= 0),
	quantity INTEGER NOT NULL CHECK(quantity >= 0) DEFAULT 0,
	PRIMARY KEY (player_id, expansion_code, card_number),
	FOREIGN KEY (player_id) REFERENCES player(player_id) ON DELETE CASCADE,
	FOREIGN KEY (expansion_code, card_number) REFERENCES card(expansion_code, card_number) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS wishlist (
	player_id INTEGER NOT NULL,
	expansion_code TEXT NOT NULL,
	card_number INTEGER NOT NULL CHECK(card_number >= 0),
	PRIMARY KEY (player_id, expansion_code, card_number),
	FOREIGN KEY (player_id) REFERENCES player(player_id) ON DELETE CASCADE,
	FOREIGN KEY (expansion_code, card_number) REFERENCES card(expansion_code, card_number) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS expansion (
	expansion_code TEXT NOT NULL,
	name TEXT NOT NULL,
	num_cards INTEGER NOT NULL CHECK(num_cards >= 0),
	PRIMARY KEY (expansion_code)
);