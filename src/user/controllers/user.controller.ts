import { NextFunction, Request, Response } from 'express';
import { wrapResponse } from '../../utils/response.util';
import { userService } from '../services';

export class UserControllerBuilder {
    async create(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(userService.addUser(req.body), req, res, next);
    }
    async deleteById(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(userService.deleteUserById(req.params.id), req, res, next);
    }
    async findAll(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(userService.getAllUsers(), req, res, next);
    }
    async findById(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(userService.findUserById(req.params.id), req, res, next);
    }
}
