export class AuthenticationBuilder {
    makeAuthentication(authentication: IAuthentication) {
        if (!authentication.email) {
            throw new Error('Authentication must have a name.');
        }
        if (!authentication.password) {
            throw new Error('Authentication must have a description.');
        }
        return {
            ...authentication
        };
    }
}

export interface IAuthentication {
    // tslint:disable: no-any member-ordering
    _id: any;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
