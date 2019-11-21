export class AuthenticationBuilder {
    makeAuthentication(authentication: IAuthentication) {
        if (!authentication.name) {
            throw new Error('Authentication must have a name.');
        }
        if (!authentication.description) {
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
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
