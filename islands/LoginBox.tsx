import { Button } from "../components/Button.tsx";
import { ModalBox } from "../components/ModalWindow.tsx";
import { TextInput } from "../components/TextInput.tsx";

export default function LoginBox() {
    return (
        <ModalBox title="Login">
            {/* Sends a POST request to /api/login endpoint */}
            <form class="login-form" method="post" action="/api/login">
                <TextInput type="text" name="username" placeholder="Username" required />
                <TextInput type="password" name="password" placeholder="Password" required />
                <div>
                    <Button type="submit">Login</Button>
                    <p class="hint">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </div>
            </form>
        </ModalBox>
    );
}
