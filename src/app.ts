import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { appRouter } from './app.routes';
import logger, { morganStream } from './config/logger.config';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan('tiny', { stream: morganStream }));
server.use('/_health', (req, res) => {
    res.status(200).json({ uptime: process.uptime() });
});

server.use('/api/v1', appRouter);

server.listen(4004, () =>
    logger.info('server.handler Running at localhost:4004'),
);

process.on('SIGINT', () => {
    // tslint:disable-next-line: no-console
    console.log(`Ooooh Looks like you've killed the process manually`);
    process.exit(1);
});

process.on('exit', (code) => {
    // tslint:disable-next-line: no-console
    console.log(`Good bye dude, I'm going to exit with code ${code}`);
});

process.on('uncaughtException', (err) => {
    // tslint:disable: no-console
    console.error('Ouuuuuch some uncaught exceptions occured');
    console.error(err);

    process.exit(1);
});
