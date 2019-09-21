import * as dotenv from 'dotenv';

dotenv.config();
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

export const DEBUG_LEVEL = process.env.LOG_LEVEL;
