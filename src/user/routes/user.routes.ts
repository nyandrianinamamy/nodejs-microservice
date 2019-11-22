import { Router } from 'express';
import { userController } from '../controller';
export class UserRoutesBuilder {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/')
            .get(userController.find.bind(userController))
            .post(userController.create.bind(userController));
        this.router
            .route('/:id')
            .get(userController.findById.bind(userController))
            .delete(userController.deleteById.bind(userController))
            .put(userController.update.bind(userController));
    }
}
