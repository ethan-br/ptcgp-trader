import { JSX } from "preact";

export function ModalBox(props: JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div class="modal-box">
            <h3 class="title">{props.title}</h3>
            {props.children}
        </div>
    );
}
