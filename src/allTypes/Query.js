import { queryType } from '@nexus/schema';
import { connectDB } from '../connectDB';
import { isProtected } from '../isAuthenticated';
import ErrorResponse from '../errorResponse';
import asyncHanlder from '../../middlewares/asyncHandler';

connectDB();

export const Query = queryType({
    definition(t) {
        t.string('name', {
            resolve: asyncHanlder(
                async (parent, args, ctx) => {
                    const isAuth = await isProtected(ctx);
                    if (!isAuth) {
                        throw new ErrorResponse('Not Auth!!!', 401);
                    }
                    return 'Jim Moriarty';
                }
            )
        });
    }
})