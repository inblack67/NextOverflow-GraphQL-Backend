import { objectType } from '@nexus/schema';

export const Question = objectType({
    name: 'Question',
    definition(t) {
        t.id('_id');
        t.string('title');
        t.string('description');
        t.string('user');
        t.string('createdAt');
    }
})