import { Handlers } from "$fresh/server.ts";
import { setCookie } from "@std/http/cookie";

export const handler: Handlers = {
    async POST(req) {
        const url = new URL(req.url);
        const form = await req.formData();
        // auth verification
        if (form.get("username") === "deno" && form.get("password") === "land") {
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

            headers.set("location", "/dashboard");
            return new Response(null, {
                status: 303, // "See Other"
                headers,
            });
        } else {
            return new Response(null, {
                status: 403,
            });
        }
    },
};
