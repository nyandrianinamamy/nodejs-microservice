import { NextFunction, Request, Response } from 'express';
import { wrapResponse } from '../../utils/response.util';
import { authenticationService } from '../services';

export class AuthenticationControllerBuilder {
    async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(authenticationService.login(req.body, req, res), req, res, next);
    }
}
