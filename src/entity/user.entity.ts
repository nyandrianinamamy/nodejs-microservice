export class UserBuilder {
    makeHash: Function;

    // tslint:disable-next-line: no-any
    constructor({ hasher }: any) {
        this.makeHash = hasher;
    }

    makeUser(user: IUser) {
        if (!user.name) {
            throw new Error('User must have a name.');
        }
        if (user.name.length < 2) {
            throw new Error('User name must have at least 3 characters');
        }
        return {
            ...user,
            hash: this.makeHash(user.name),
        };
    }
}

export interface IUser {
    _id: string;
    hash?: string;
    name: string;
}
