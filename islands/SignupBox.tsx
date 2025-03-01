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
                    <p class="hint">
                        <img
                            class="hint-icon"
                            src="https://img.icons8.com/?size=100&id=P7N90lIvNYPd&format=png&color=38414e"
                        />
                        Go to: Home &gt; Profile
                    </p>
                </div>
                <TextInput type="text" name="username" placeholder="Username" required />
                <TextInput type="password" name="password" placeholder="Password" required />
                <Button type="submit">Sign up</Button>
            </form>
        </ModalBox>
    );
}
