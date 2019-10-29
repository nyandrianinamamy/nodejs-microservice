import { NextFunction, Request, Response } from 'express';
import { userService } from '../service';
import { wrapResponse } from '../utils/response.util';

export class UserControllerBuilder {
    async create(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        wrapResponse(userService.addUser(req.body), req, res, next);
    }
}
