import { Document, DocumentQuery, Model } from 'mongoose';
import { IRead } from './interfaces/read.interface';
import { IWrite } from './interfaces/write.interface';

// tslint:disable: no-any
export type IDb<D extends Document, I> = IRead<D, I> & IWrite<D, I>;

export const NOT_IMPLEMENTED = 'Repository Method not implemented.';

export abstract class MongoRepository<D extends Document, I>
    implements IRead<D, I>, IWrite<D, I> {
    model: Model<any>;
    constructor(model: Model<D>) {
        this.model = model;
    }
    create(item: Partial<I>): Promise<D> {
        return this.model.create(item);
    }

    delete(id: string): Promise<boolean> {
        return this.model.deleteOne({ _id: id }).then(() => true);
    }

    find(conditions: any): DocumentQuery<D[], D> {
        return this.model.find(conditions);
    }

    findOne(id: string): DocumentQuery<D | null, D> {
        return this.model.findById(id);
    }

    update(id: string, item: Partial<I>): Promise<D | null> {
        return this.model.findByIdAndUpdate(id, item, { new: true }).exec();
    }
}
