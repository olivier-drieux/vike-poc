import "dotenv/config";

import { vikeHandler } from "./server/vike-handler";
import { telefuncHandler } from "./server/telefunc-handler";
import { Hono } from "hono";
import { createHandler, createMiddleware } from "@universal-middleware/hono";
import { dbMiddleware } from "./server/db-middleware";

const app = new Hono();

app.use(createMiddleware(dbMiddleware)());

app.post("/_telefunc", createHandler(telefuncHandler)());

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", createHandler(vikeHandler)());

export default app;
