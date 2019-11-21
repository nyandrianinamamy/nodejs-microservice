import { NextFunction, Request, Response } from 'express';
import { wrapResponse } from '../../utils/response.util';
import { authenticationService } from '../services';

export class AuthenticationControllerBuilder {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(authenticationService.create(req.body), req, res, next);
    }
    async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(authenticationService.deleteById(req.params.id), req, res, next);
    }
    async find(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(authenticationService.find(req.query), req, res, next);
    }
    async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(authenticationService.findById(req.params.id), req, res, next);
    }
    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(authenticationService.update(req.params.id, req.body), req, res, next);
    }
}
