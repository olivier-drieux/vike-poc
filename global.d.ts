import type { dbMysql } from './src/database/drizzle/db';

declare module 'telefunc' {
    namespace Telefunc {
        interface Context {
            db: ReturnType<typeof dbMysql>;
        }
    }
}

declare global {
    namespace Vike {
        interface PageContext {
            db: ReturnType<typeof dbMysql>;
        }
    }
}

export {};
