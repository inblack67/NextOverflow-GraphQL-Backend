import { queryType } from '@nexus/schema';
import QuestionModel from '../../models/Question';
import { isProtected } from '../isAuthenticated';
import ErrorResponse from '../errorResponse';
import { User } from './User';
import asyncHandler from '../../middlewares/asyncHandler';
import { Question } from './Question';
import UserModel from '../../models/User';

export const Query = queryType({
    definition(t) {

        t.list.field('questions', {
            type: Question,
            description: 'Get All Questions',
            resolve: asyncHandler(
                async () => {
                    const questions = await QuestionModel.find().populate('user');
                    return questions;
                }
            )
        })

        t.field('getMe', {
            type: User,
            description: 'Get Logged In User',
            resolve: asyncHandler(
                async (parent, args, ctx) => {
                    const isAuthenticated = await isProtected(ctx);
                    if (!isAuthenticated) {
                        throw new ErrorResponse('Not Auth!', 401);
                    }
                    return ctx.req.user;
                }
            )
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

                    const users = await UserModel.find().populate('questions');
                    return users;
                }
            )
        })
    }
})