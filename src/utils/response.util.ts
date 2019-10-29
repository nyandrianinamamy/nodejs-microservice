import { NextFunction, Request, Response } from 'express';

// tslint:disable-next-line: no-any
export const reS = (data: any, res: Response) => {
    res.status(200).send({ data });
};

export const reE = (e: Error, res: Response) => {
    res.status(500).json({
        data: {
            name: e.name,
            message: e.message,
            stack: e.stack,
        },
    });
};

export const wrapResponse = async <T>(
    p: Promise<T>,
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        reS(await p, res);
    } catch (e) {
        // pass error to error middleware
        next(e);
    }
};
