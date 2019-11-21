import { Router } from 'express';
import { authenticationController } from '../controller';
export class AuthenticationRoutesBuilder {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/')
            .get(authenticationController.find.bind(authenticationController))
            .post(authenticationController.create.bind(authenticationController));
        this.router
            .route('/:id')
            .get(authenticationController.findById.bind(authenticationController))
            .delete(authenticationController.deleteById.bind(authenticationController))
            .put(authenticationController.update.bind(authenticationController));
    }
}
