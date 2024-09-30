import type { Get, UniversalMiddleware } from '@universal-middleware/core';
import { dbMysql } from '../database/drizzle/db';

declare global {
    namespace Universal {
        interface Context {
            db: ReturnType<typeof dbMysql>;
        }
    }
}

// Add `db` to the Context
export const dbMiddleware: Get<[], UniversalMiddleware> = () => async (_request, context, _runtime) => {
    const db = dbMysql();

    return {
        ...context,
        db: db,
    };
};
