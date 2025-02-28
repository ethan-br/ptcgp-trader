export default function SignupBox() {
    return (
        <div class="auth-box">
            <h3 class="title">Sign-up</h3>
            {/* Sends a POST request to /api/login endpoint */}
            <form class="login-form" method="post" action="/api/login">
                <input class="text-input" type="text" name="friendId" placeholder="Friend ID" required />
                <p class="hint">Home &gt; Profile</p>
                <input class="text-input" type="text" name="username" placeholder="Username" required />
                <input class="text-input" type="password" name="password" placeholder="Password" required />
                <button class="submit-button" type="submit">Sign up</button>
            </form>
        </div>
    );
}
