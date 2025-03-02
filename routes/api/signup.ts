import { Handlers } from "$fresh/server.ts";
import { addPlayer } from "../../src/dbHelpers.ts";
import { FriendID } from "../../sqlite/types.ts";
import { isValidSignupForm, sha256 } from "../../src/authHelpers.ts";

export const handler: Handlers = {
    async POST(req) {
        const form = await req.formData();
        if (isValidSignupForm(form)) {
            console.log({
                friend_id: <FriendID> form.get("friendId"),
                username: <string> form.get("username"),
                password_hash: await sha256(<string> form.get("password")),
            });
            addPlayer({
                friend_id: <FriendID> form.get("friendId"),
                username: <string> form.get("username"),
                password_hash: await sha256(<string> form.get("password")),
            });
            const headers = new Headers();
            headers.set("location", "/login");
            return new Response(null, {
                status: 303,
                headers,
            });
        } else {
            return new Response(null, {
                status: 400,
            });
        }
    },
};
