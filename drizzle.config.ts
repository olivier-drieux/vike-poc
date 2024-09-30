import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
    throw new Error('Missing DATABASE_URL in .env file');
}

export default defineConfig({
    dialect: 'mysql',
    schema: './src/database/drizzle/schema/*',
    out: './src/database/migrations',

    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});
