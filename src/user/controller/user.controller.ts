import { NextFunction, Request, Response } from 'express';
import { wrapResponse } from '../../utils/response.util';
import { userService } from '../services';

export class UserControllerBuilder {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(userService.create(req.body), req, res, next);
    }
    async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(userService.deleteById(req.params.id), req, res, next);
    }
    async find(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(userService.find(req.query), req, res, next);
    }
    async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(userService.findById(req.params.id), req, res, next);
    }
    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        wrapResponse(userService.update(req.params.id, req.body), req, res, next);
    }
}
