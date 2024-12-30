import { query } from './_generated/server';
import { getAuthUserId } from '@convex-dev/auth/server';

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);

    if (userId === null) {
      throw new Error('Client is not authenticated!');
    }

    return ctx.db.get(userId);
  },
});
