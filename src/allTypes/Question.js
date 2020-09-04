import { objectType } from '@nexus/schema';
import { User } from './User';

export const Question = objectType({
    name: 'Question',
    definition(t) {
        t.id('_id');
        t.string('title');
        t.string('description');
        t.string('tags');
        t.field('user', {
            type: User
        });
        t.string('createdAt');
    }
})