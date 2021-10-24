import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import Gun from "https://cdn.skypack.dev/gun";

const app = new Application();
app.use(Gun.serve)

const server = app.listen(port);
Gun({ file: 'db/data', web: server });

addEventListener("fetch", app.fetchEventHandler());

