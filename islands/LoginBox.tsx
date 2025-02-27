import { Handlers } from "$fresh/server.ts";

export default function LoginBox() {
    return (
        <div class="login-box">
            <h3 class="title">Login</h3>
            <form class="login-form">
                <input class="text-input" type="text" name="username" placeholder="Username" />
                <input class="text-input" type="password" name="password" placeholder="Password" />
                <button class="submit-button" type="submit">Login</button>
            </form>
        </div>
    );
}
