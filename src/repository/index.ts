import { IDb, NOT_IMPLEMENTED } from './base.repository';
import { UserRepository } from './user.repository';

// Fake db to test everything quickly
// tslint:disable: no-any
const fakeDb: IDb = {
    find: (conditions: any): Promise<any[]> =>
        Promise.resolve(['user1', 'user2']),
    findOne: (id: string) => {
        throw new Error(NOT_IMPLEMENTED);
    },
    create: (item: any) => {
        throw new Error(NOT_IMPLEMENTED);
    },
    delete: (id: string) => {
        throw new Error(NOT_IMPLEMENTED);
    },
    update: (id: string, item: any) => {
        throw new Error(NOT_IMPLEMENTED);
    },
};

// Connect the user repository to the db
const userRepository: UserRepository = new UserRepository(fakeDb);

export { userRepository };
