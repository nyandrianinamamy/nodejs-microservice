import { Router } from 'express';
import passport from 'passport';
import { authenticationRouter } from '../authentication/routes';
import { userRouter } from '../user/routes';

export class Routes {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    public getRouter(): Router {
        return this.router;
    }

    private init() {
        this.router.use('/authentication', authenticationRouter);
        this.router.use('/user', passport.authenticate('jwt', { session: false }), userRouter);
    }
}
