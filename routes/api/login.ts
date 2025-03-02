import { Handlers } from "$fresh/server.ts";
import { setCookie } from "@std/http/cookie";
import { getPlayerId } from "../../src/dbHelpers.ts";
import { isValidLoginForm, sha256 } from "../../src/authHelpers.ts";

export const handler: Handlers = {
    async POST(req) {
        const url = new URL(req.url);
        const form = await req.formData();
        if (isValidLoginForm(form)) {
            const playerId = getPlayerId(<string> form.get("username"), await sha256(<string> form.get("password")));
            const headers = new Headers();
            setCookie(headers, {
                name: "auth",
                value: "uniqueValue", // this should be a unique value for each session
                maxAge: 120, // in seconds
                sameSite: "Lax", // this is important to prevent CSRF attacks
                domain: url.hostname,
                path: "/",
                secure: true,
            });
            if (playerId !== -1) {
                headers.set("location", `/dashboard/${playerId}`);
                return new Response(null, {
                    status: 303,
                    headers,
                });
            } else {
                return new Response(null, {
                    status: 403,
                });
            }
        } else {
            return new Response(null, {
                status: 403,
            });
        }
    },
};
