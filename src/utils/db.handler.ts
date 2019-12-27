import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const mongod = new MongoMemoryServer();

const connect = async () => {
    const uri = await mongod.getConnectionString();
    const mongooseOpts = {
        useNewUrlParser: true,
        useFindAndModify: false,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        useUnifiedTopology: true
    };
    await mongoose.connect(uri, mongooseOpts);
};

const closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
};

const clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    // tslint:disable-next-line: forin
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
};

export { connect, closeDatabase, clearDatabase };
