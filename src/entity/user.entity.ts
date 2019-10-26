export class UserBuilder {
    makeHash: Function;

    // tslint:disable-next-line: no-any
    constructor({ hasher }: any) {
        this.makeHash = hasher;
    }

    makeUser(user: IUser) {
        if (!user.email) {
            throw new Error('User must have an email address.');
        }
        if (user.firstName && user.firstName.length < 3) {
            throw new Error('User name must have at least 3 characters');
        }
        if (!user.password) {
            throw new Error('User must have a password');
        }
        if (user.password.length < 8) {
            throw new Error('User password must have at least 8 characters');
        }
        return {
            ...user,
            hash: this.makeHash(user.email),
        };
    }
}

export interface IUser {
    // tslint:disable: no-any member-ordering
    _id: any;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    hash?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
