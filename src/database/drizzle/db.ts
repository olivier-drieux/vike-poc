import mysql from 'mysql2';
import { drizzle } from 'drizzle-orm/mysql2';

export function dbMysql() {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not set');
    }

    const connection = mysql.createConnection({
        uri: process.env.DATABASE_URL,
    });

    return drizzle(connection);
}
