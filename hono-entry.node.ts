import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { type Context, Hono } from 'hono';
import { env } from 'hono/adapter';
import { compress } from 'hono/compress';
import app from './hono-entry';

const envs = env<{ NODE_ENV: string; PORT: string }>({ env: {} } as unknown as Context<object>);

const honoApp = new Hono();

honoApp.use(compress());

honoApp.use(
    '/src/assets/*',
    serveStatic({
        root: './dist/client/',
    })
);

honoApp.route('/', app);

const port = envs.PORT ? Number.parseInt(envs.PORT, 10) : 3000;

console.log(`Server listening on http://localhost:${port}`);
serve({
    fetch: honoApp.fetch,
    port: port,
});
