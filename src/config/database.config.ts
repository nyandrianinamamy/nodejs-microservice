import mongoose from 'mongoose';
import logger from './logger.config';

export class MongoDatabase {
    connect(cb: () => void) {
        const userDbUrl = 'mongodb://localhost:27017/dx-user';
        mongoose.connect(userDbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
        });
        mongoose.connection.once('open', () => {
            cb();
        });
        mongoose.connection.on('disconnected', () => {
            logger.error(`Disconnected to database`);
        });
        mongoose.connection.on('connected', () =>
            logger.info('Database connected'),
        );
        mongoose.connection.on('error', (err) => {
            logger.error('Database not connected');
        });
    }
}
