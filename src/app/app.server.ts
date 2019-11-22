import * as bodyParser from 'body-parser';
import express, { Application } from 'express';
import morgan from 'morgan';
import { routes } from '../config';
import { env } from '../config/env.config';
import logger, { morganStream } from '../config/logger.config';
import { applyMiddleware } from '../utils/apply-middleware';
import errorHandlersMiddleware from '../utils/errors/error.middleware';
import passport from './../authentication/config/passport.config';
export class App {
    server!: Application;
    async init() {
        this.server = express();
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(passport.initialize());
        this.server.use(morgan('tiny', { stream: morganStream }));
        this.server.use('/_health', (req, res) => {
            res.status(200).json({ uptime: process.uptime() });
        });
        this.server.use('/api/v1', routes);
        applyMiddleware(errorHandlersMiddleware, routes);
        this.server.listen(env.server.port, () => logger.info(`Server Running at localhost:${env.server.port}`));
    }
}
