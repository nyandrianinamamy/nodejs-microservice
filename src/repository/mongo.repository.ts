import { Model } from 'mongoose';
import { IRead } from './interfaces/read.interface';
import { IWrite } from './interfaces/write.interface';

// tslint:disable: no-any
export type IDb = IRead<any> & IWrite<any>;

export const NOT_IMPLEMENTED = 'Repository Method not implemented.';

export abstract class MongoRepository<T> implements IRead<T>, IWrite<T> {
    model: Model<any>;
    constructor(model: Model<any>) {
        this.model = model;
    }
    create(item: T): Promise<T> {
        return this.model.create(item);
    }

    delete(id: string): Promise<T> {
        return this.model.findByIdAndDelete(id).exec();
    }

    find(conditions: any): Promise<T[]> {
        return this.model.find(conditions).exec();
    }

    findOne(id: string): Promise<T> {
        return this.model.findById(id).exec();
    }

    update(id: string, item: T): Promise<T> {
        return this.model.update(id, item).exec();
    }
}
