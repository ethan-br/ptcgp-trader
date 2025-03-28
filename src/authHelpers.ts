export function isValidSignupForm(form: FormData) {
    return form.has("friendId") && form.has("username") && form.has("password");
}

export function isValidLoginForm(form: FormData) {
    return form.has("username") && form.has("password");
}

export async function sha256(text: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
