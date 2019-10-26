import { Router } from 'express';
import { userController } from '../controller';
export class UserRoutesBuilder {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router
            .route('/create')
            .post(userController.create.bind(userController));
    }
}
