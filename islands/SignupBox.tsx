import { Button } from "../components/Button.tsx";
import { ModalBox } from "../components/ModalWindow.tsx";
import { TextInput } from "../components/TextInput.tsx";

export default function SignupBox() {
    return (
        <ModalBox title="Sign up">
            {/* Sends a POST request to /api/login endpoint */}
            <form class="login-form" method="post" action="/api/login">
                <div>
                    <TextInput type="text" name="friendId" placeholder="Friend ID" required />
                    <p class="hint">Go to: Home &gt; Profile</p>
                </div>
                <TextInput type="text" name="username" placeholder="Username" required />
                <TextInput type="password" name="password" placeholder="Password" required />
                <Button type="submit">Sign up</Button>
            </form>
        </ModalBox>
    );
}
