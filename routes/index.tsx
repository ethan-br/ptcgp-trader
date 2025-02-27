import LoginBox from "../islands/LoginBox.tsx";
import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "@std/http/cookie";

interface Data {
    isLoggedIn: boolean;
}

export const handler: Handlers<Data> = {
    GET(req, ctx) {
        const cookies = getCookies(req.headers);
        return ctx.render!({ isLoggedIn: cookies.auth === "uniqueValue" });
    },
};

export default function Home({ data }: PageProps<Data>) {
    return (
        <div>
            <h1>PTCGP Trader</h1>
            <div class="content">
                You currently {data.isLoggedIn ? "are" : "are not"} logged in.
                {data.isLoggedIn ? <a href="/api/logout">Logout</a> : <LoginBox />}
            </div>
        </div>
    );
}
