export default function LoginBox() {
    return (
        <div class="login-box">
            <h3 class="title">Login</h3>
            {/* Sends a POST request to /api/login endpoint */}
            <form class="login-form" method="post" action="/api/login">
                <input class="text-input" type="text" name="username" placeholder="Username" />
                <input class="text-input" type="password" name="password" placeholder="Password" />
                <button class="submit-button" type="submit">Login</button>
            </form>
        </div>
    );
}
