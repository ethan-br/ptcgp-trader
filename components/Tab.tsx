import { JSX } from "preact";

export function Tab(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            class="tab"
        />
    );
}
