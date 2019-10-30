import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { routes } from '../config';
import logger, { morganStream } from '../config/logger.config';
import { applyMiddleware } from '../utils/apply-middleware';
import errorHandlersMiddleware from '../utils/errors/error.middleware';
export class App {
    init() {
        const server = express();
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(morgan('tiny', { stream: morganStream }));
        server.use('/_health', (req, res) => {
            res.status(200).json({ uptime: process.uptime() });
        });
        server.use('/api/v1', routes);
        applyMiddleware(errorHandlersMiddleware, routes);
        server.listen(4004, () => logger.info('Running at localhost:4004'));
    }
}
