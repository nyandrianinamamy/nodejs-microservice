import { database, server } from './config';
import logger from './config/logger.config';

database.connect(() => {
    // tslint:disable: no-console
    server.init();
    process.on('SIGINT', () => {
        logger.info(`Process killed manually`);
        console.log(`Ooooh Looks like you've killed the process manually`);
        process.exit(1);
    });

    process.on('exit', (code) => {
        logger.info(`Process exited with code ${code}`);
        console.log(`Good bye dude, I'm going to exit with code ${code}`);
    });

    process.on('uncaughtException', (err) => {
        logger.error(`Uncaught exception ${err.stack}`);
        console.error('Ouuuuuch some uncaught exceptions occured');
        console.error(err);
        process.exit(1);
    });
});
