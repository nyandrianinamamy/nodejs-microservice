import { Router } from 'express';
import { userRouter } from '../routes';

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
        this.router.use('/user', userRouter);
    }
}
