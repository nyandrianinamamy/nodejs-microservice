import { NextFunction, Response } from 'express';
import { reE } from '../response.util';
import { HTTP404Error, HTTPClientError } from './error.class';

export const notFoundError = () => {
    throw new HTTP404Error('Method not found.');
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
    if (err instanceof HTTPClientError) {
        res.status(err.statusCode).send(err.message);
    } else {
        next(err);
    }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === 'production') {
        res.status(500).send('Internal Server Error');
    } else {
        reE(err, res);
    }
};
