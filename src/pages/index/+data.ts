import type { PageContextServer } from 'vike/types';
import { type User, userSchema } from '../../database/drizzle/schema/user-schema';

export interface UsersData {
    users: User[];
}

export default async function data(pageContext: PageContextServer): Promise<UsersData> {
    return {
        users: await pageContext.db.select().from(userSchema),
    };
}
