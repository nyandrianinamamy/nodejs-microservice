import express from 'express';
import morgan from 'morgan';
import logger, { morganStream } from './config/logger.config';

const server = express();

server.use(morgan('combined', { stream: morganStream }));
server.use('/_health', (req, res) => {
    res.status(200).json({ uptime: process.uptime() });
});

server.listen(4004, () =>
    logger.info('server.handler Running at localhost:4004'),
);
