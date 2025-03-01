import type { Handlers } from "$fresh/server.ts";
import { getCookies } from "@std/http/cookie";

export const handler: Handlers = {
    GET(req, _ctx) {
        const cookies = getCookies(req.headers);
        if (cookies.auth === "uniqueValue") {
            return new Response("", {
                status: 307,
                headers: { Location: "/dashboard" },
            });
        }
        return new Response("", {
            status: 307,
            headers: { Location: "/login" },
        });
    },
};

export default function Home() {
    return (
        <div>
            <h1>PTCGP Trader</h1>
            <div class="content">
            </div>
        </div>
    );
}
