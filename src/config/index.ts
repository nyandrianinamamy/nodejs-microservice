import { App } from './app.config';
import { MongoDatabase } from './database.config';
import { Routes } from './routes.config';

const database = new MongoDatabase();
const routes = new Routes().getRouter();
const server = new App();
export { database, routes, server };
