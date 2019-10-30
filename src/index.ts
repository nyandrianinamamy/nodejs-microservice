import { database, server } from './config';
import logger from './config/logger.config';

database.connect(() => {
    server.init();
    process.on('SIGINT', () => {
        logger.info(`Process killed manually`);
        process.exit(1);
    });

    process.on('exit', (code) => {
        logger.info(`Process exited with code ${code}`);
    });

    process.on('uncaughtException', (e) => {
        logger.error(e);
        process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
        logger.error(reason as Error);
        process.exit(1);
    });
});
