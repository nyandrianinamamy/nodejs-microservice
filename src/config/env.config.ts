import * as dotenv from 'dotenv';
import * as envvar from 'env-var';

dotenv.config();
export const env = {
    server: {
        port: envvar.get('NODE_PORT').asIntPositive() || 4004
    },
    mongodb: {
        dbURI: envvar.get('MONGODB_URI').asUrlString() || 'mongodb://localhost:27017/testenv'
    },
    jwt: {
        secretKey: envvar.get('JWT_SECRET').asString() || 'my-special-secret-key',
        expiration: envvar.get('JWT_EXPIRATION').asIntPositive() || 20000
    },
    initialize() {
        let path;
        switch (process.env.NODE_ENV) {
            case 'test':
                path = `${__dirname}/../../.env.test`;
                break;
            case 'production':
                path = `${__dirname}/../../.env.production`;
                break;
            default:
                path = `${__dirname}/../../.env`;
        }
        dotenv.config({ path });
    }
};
export const DEBUG_LEVEL = process.env.LOG_LEVEL;
