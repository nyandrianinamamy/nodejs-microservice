import winston, { Logger } from 'winston';

const format = winston.format.printf(
    ({ level, message, timestamp }) => `[${level}] ${timestamp}: ${message}`,
);

const logger: Logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            handleExceptions: true,
        }),
        new winston.transports.File({
            filename: `${__dirname}/../../logs/infos.log`,
            level: 'info',
            maxsize: 5242880,
            maxFiles: 50,
            handleExceptions: true,
        }),
        new winston.transports.File({
            filename: `${__dirname}/../../logs/errors.log`,
            level: 'error',
            maxsize: 5242880,
            maxFiles: 50,
            handleExceptions: true,
        }),
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        format,
    ),
    exceptionHandlers: [
        new winston.transports.File({
            filename: `${__dirname}/../../logs/exceptions.log`,
        }),
    ],
    exitOnError: false,
});

class MorganStream {
    write(text: string) {
        logger.info(`server.handler ${text.trim()}`);
    }
}

export const morganStream: MorganStream = new MorganStream();
export default logger;
