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
        this.router
            .route('/all')
            .get(userController.findAll.bind(userController));
        this.router
            .route('/:id')
            .get(userController.findById.bind(userController))
            .delete(userController.deleteById.bind(userController));
    }
}
