// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_login from "./routes/api/login.ts";
import * as $api_logout from "./routes/api/logout.ts";
import * as $dashboard from "./routes/dashboard.tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $signup from "./routes/signup.tsx";
import * as $LoginBox from "./islands/LoginBox.tsx";
import * as $SignupBox from "./islands/SignupBox.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
    routes: {
        "./routes/_404.tsx": $_404,
        "./routes/_app.tsx": $_app,
        "./routes/api/login.ts": $api_login,
        "./routes/api/logout.ts": $api_logout,
        "./routes/dashboard.tsx": $dashboard,
        "./routes/index.tsx": $index,
        "./routes/login.tsx": $login,
        "./routes/signup.tsx": $signup,
    },
    islands: {
        "./islands/LoginBox.tsx": $LoginBox,
        "./islands/SignupBox.tsx": $SignupBox,
    },
    baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
