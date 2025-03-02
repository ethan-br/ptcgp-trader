export type Rarity = "♢" | "♢♢" | "♢♢♢" | "♢♢♢♢" | "☆";
export type FriendID =
    `${number}${number}${number}${number}-${number}${number}${number}${number}-${number}${number}${number}${number}-${number}${number}${number}${number}`;

export interface Card {
    expansion_code: string;
    card_number: number;
    name: string;
    rarity: Rarity;
}

export interface Player {
    player_id: number;
    username: string;
    password_hash: string;
    friend_id: FriendID;
}

export interface Collection {
    player_id: number;
    expansion_code: string;
    card_number: number;
    quantity: number;
}

export interface Expansion {
    expansion_code: string;
    name: string;
    num_cards: number;
}
