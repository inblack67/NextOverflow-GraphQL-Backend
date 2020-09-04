import { objectType } from '@nexus/schema';

export const Comment = objectType({
    name: 'Comment',
    definition(t) {
        t.id('_id');
        t.string('content');
        t.string('user');
        t.string('createdAt');
    }
})