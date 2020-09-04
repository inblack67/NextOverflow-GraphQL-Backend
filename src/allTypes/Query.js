import { queryType } from '@nexus/schema';
import { connectDB } from '../connectDB';

connectDB();

export const Query = queryType({
    definition(t) {
        t.string('name', () => 'Jim Moriarty');
    }
})