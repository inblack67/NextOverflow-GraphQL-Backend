import { queryType } from '@nexus/schema';
import { connectDB } from '../connectDB';
import { isProtected } from '../isAuthenticated';
import ErrorResponse from '../errorResponse';
import asyncHanlder from '../../middlewares/asyncHandler';
import { User } from './User';
import asyncHandler from '../../middlewares/asyncHandler';

export const Query = queryType({
    definition(t) {
        t.string('name', {
            resolve: asyncHanlder(
                async (parent, args, ctx) => {
                    return 'Jim Moriarty';
                }
            )
        });
        t.field('getMe', {
            type: User,
            description: 'Get Logged In User',
            resolve: async (parent, args, ctx) => {
                const isAuthenticated = await isProtected(ctx);
                if (!isAuthenticated) {
                    throw new ErrorResponse('Not Auth!', 401);
                }
                return ctx.req.user;
            }
        });

        t.list.field('users', {
            type: User,
            description: 'GET All Users',
            resolve: asyncHandler(
                async (parent, args, ctx) => {

                    const isAuthenticated = await isProtected(ctx);

                    if (!isAuthenticated) {
                        throw new ErrorResponse('Not Auth', 401);
                    }

                    const users = await UserModel.find();
                    return users;
                }
            )
        })
    }
})