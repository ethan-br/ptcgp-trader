import { PageProps } from "$fresh/server.ts";
import { Player } from "../../sqlite/types.ts";
import { getPlayerById } from "../../src/dbHelpers.ts";

export default function Dashboard(props: PageProps) {
    const { playerId } = props.params;
    const loggedInPlayer: Player = getPlayerById(Number(playerId));
    console.log(loggedInPlayer);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                Hi {loggedInPlayer.username}, logout <a href="/api/logout">here</a>
            </p>
        </div>
    );
}
