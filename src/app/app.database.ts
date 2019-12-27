import mongoose from 'mongoose';
import { env } from '../config/env.config';
import logger from '../config/logger.config';

export class MongoDatabase {
    connect(cb: () => void, test = false) {
        let userDbUrl = env.mongodb.dbURI;
        if (test) {
            userDbUrl = 'mongodb://localhost:27017/testDB';
        }
        mongoose.connect(userDbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        mongoose.connection.once('open', () => {
            cb();
        });
        mongoose.connection.on('disconnected', () => {
            logger.error(`Disconnected to database`);
        });
        mongoose.connection.on('connected', () => logger.info('Database connected'));
        mongoose.connection.on('error', (err) => {
            logger.error('Database not connected');
        });
    }
}
