import { database, server } from './config';
import { env } from './config/env.config';
import logger from './config/logger.config';

// Initialize environment earlier
env.initialize();
database.connect(async () => {
    await server.init();
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
