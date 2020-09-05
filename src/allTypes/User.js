import { objectType } from '@nexus/schema';
import { Answer } from './Answer';
import { Question } from './Question';

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('name');
        t.string('email');
        t.string('password', { nullable: true });
        t.list.field('questions', {
            type: Question,
            nullable: true
        });
        t.list.field('answers', {
            type: Answer,
            nullable: true
        });
        t.string('createdAt');
        t.id('_id');
    }
})