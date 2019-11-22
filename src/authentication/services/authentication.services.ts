import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { UserRepository } from '../../user/repository/user.repository';
import { IAuthentication } from '../entity/authentication.entity';

const NOT_FOUND = 'Authentication not found';

export class AuthenticationServiceBuilder {
    userRepository: UserRepository;

    // tslint:disable-next-line: no-any
    constructor({ userRepository }: any) {
        this.userRepository = userRepository;
    }
    async login(authenticationInfo: IAuthentication, req: Request, res: Response) {
        return new Promise((resolve, reject) => {
            passport.authenticate('local', { session: false }, (err, retUser, info) => {
                if (!retUser) {
                    reject(info);
                }
                const user = { _id: retUser._id, email: retUser.email };
                const token = jwt.sign(user, 'secret', {
                    expiresIn: 20000
                });
                resolve({ user, token });
            })(req, res);
        });
    }
}
