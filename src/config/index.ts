import { MongoDatabase } from '../app/app.database';
import { Routes } from '../app/app.routes';
import { App } from '../app/app.server';

const database = new MongoDatabase();
const routes = new Routes().getRouter();
const server = new App();
export { database, routes, server };
