import { Router } from 'express';
import { authenticationController } from '../controller';
export class AuthenticationRoutesBuilder {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/login').post(authenticationController.login.bind(authenticationController));
    }
}
