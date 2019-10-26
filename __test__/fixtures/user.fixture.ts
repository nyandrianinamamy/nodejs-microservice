import { IDb } from '../../src/repository/base.repository';

const NOT_IMPLEMENTED = 'Not implemented';
const users = [
    {
        _id: '1',
        email: 'john@example.com',
        firstName: 'John',
        lastName: 'Doe',
        // tslint:disable-next-line: no-hardcoded-credentials
        password: 'johndoejr',
    },
];
let lastId = '1';
// tslint:disable: no-any
export const fakeUserDb: IDb = {
    find: (conditions: any): Promise<any[]> => {
        const user = users.find((u) => u.email === conditions.email);
        if (user) {
            return Promise.resolve([user]);
        }
        return Promise.resolve([]);
    },
    findOne: (email: string) => {
        const user = users.find((u) => u.email === email);
        if (user) {
            return Promise.resolve(user);
        }
        return Promise.resolve(null);
    },
    create: (item: any): Promise<any> => {
        const id = +lastId + 1;
        lastId = id.toString();
        const user = { ...item, _id: id };
        users.push(user);
        return Promise.resolve(user);
    },
    delete: (id: string) => {
        throw new Error(NOT_IMPLEMENTED);
    },
    update: (id: string, item: any) => {
        throw new Error(NOT_IMPLEMENTED);
    },
};
