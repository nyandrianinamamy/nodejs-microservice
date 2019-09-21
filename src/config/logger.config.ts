import winston, { Logger } from 'winston';

const format = winston.format.printf(
    ({ level, message, timestamp }) => `[${level}] ${timestamp}: ${message}`,
);

const logger: Logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: `${__dirname}/../../logs/infos.log`,
            level: 'info',
            maxsize: 5242880,
            maxFiles: 50,
        }),
        new winston.transports.File({
            filename: `${__dirname}/../../logs/errors.log`,
            level: 'error',
            maxsize: 5242880,
            maxFiles: 50,
        }),
        new winston.transports.File({
            filename: `${__dirname}/../../logs/warns.log`,
            level: 'warn',
            maxsize: 5242880,
            maxFiles: 50,
        }),
        new winston.transports.File({
            filename: `${__dirname}/../../logs/debugs.log`,
            level: 'debug',
            maxsize: 5242880,
            maxFiles: 50,
        }),
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        format,
    ),
});

export default logger;
