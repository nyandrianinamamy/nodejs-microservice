import { Router } from 'express';
import { userRouter } from './routes';

class AppRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.use('/user', userRouter);
    }
}

export const appRouter = new AppRoutes().router;
