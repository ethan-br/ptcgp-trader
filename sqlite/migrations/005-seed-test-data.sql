-- MIGRATION: UP
-- Insert sample players
INSERT INTO
    player (username, friend_id)
VALUES
    ('Alice', 'F12345'),
    ('Bob', 'F67890'),
    ('Charlie', 'F54321');

-- Insert sample collections
-- Alice owns 2 copies of Bulbasaur (A1-1) and 1 copy of Ivysaur (A1-2)
INSERT INTO
    collection (player_id, expansion_code, card_number, quantity)
VALUES
    (1, 'A1', 1, 2),  -- Alice owns 2 Bulbasaur
    (1, 'A1', 2, 1);

-- Alice owns 1 Ivysaur
-- Bob owns 1 copy of Venusaur (A1-3) and 2 copies of Charmander (A1-33)
INSERT INTO
    collection (player_id, expansion_code, card_number, quantity)
VALUES
    (2, 'A1', 3, 1),  -- Bob owns 1 Venusaur
    (2, 'A1', 33, 2);

-- Bob owns 2 Charmander
-- Charlie owns 1 copy of Charizard (A1-35) and 1 copy of Blastoise (A1-55)
INSERT INTO
    collection (player_id, expansion_code, card_number, quantity)
VALUES
    (3, 'A1', 35, 1),  -- Charlie owns 1 Charizard
    (3, 'A1', 55, 1);

-- Charlie owns 1 Blastoise
-- MIGRATION: DOWN
DELETE *
FROM
    player
