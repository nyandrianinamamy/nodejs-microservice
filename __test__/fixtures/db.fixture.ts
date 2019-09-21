import { IDb } from '../../src/repository/base.repository';

const NOT_IMPLEMENTED = 'Not implemented';
// tslint:disable: no-any
export const fakeDb: IDb = {
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
