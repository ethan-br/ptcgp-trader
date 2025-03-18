import { JSX } from "preact";

export function TabBar(props: JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div class="tab-bar">
            {props.children}
        </div>
    );
}
