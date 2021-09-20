import {createApp, ServerRequest} from "https://deno.land/x/servest@v1.3.1/mod.ts";
const app = createApp();
console.log("http://localhost:8000/");
app.get("/", async (req: ServerRequest) => {
    await req.respond({
        status: 200,
        body: "Hell Word",
    });
});
app.listen({port: 8000});
