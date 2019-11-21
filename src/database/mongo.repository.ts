import { Document, DocumentQuery, Model } from 'mongoose';
import { buildFilter, buildSearch } from '../utils/query.utils';
import { BaseRepository } from './base.repository';

// tslint:disable: no-any
export const NOT_IMPLEMENTED = 'Repository Method not implemented.';

export abstract class MongoRepository<D extends Document, I> implements BaseRepository<D, I> {
    model: Model<any>;
    query = {};
    constructor(model: Model<D>) {
        this.model = model;
    }
    create(item: Partial<I>): Promise<D> {
        return this.model.create(item);
    }

    delete(id: string): Promise<boolean> {
        return this.model.deleteOne({ _id: id }).then(() => true);
    }

    filter(filter: Record<string, any>) {
        this.query = { ...this.query, ...buildFilter(filter) };
        return this;
    }

    find(conditions: any): DocumentQuery<D[], D> {
        return this.model.find(conditions);
    }

    findAndExec() {
        const query = this.query;
        this.query = {};
        return this.model.find(query).exec();
    }

    findOne(id: string): DocumentQuery<D | null, D> {
        return this.model.findById(id);
    }

    search(search: string) {
        this.query = { ...this.query, ...buildSearch(search) };
        return this;
    }

    update(id: string, item: Partial<I>): Promise<D | null> {
        return this.model.findOneAndUpdate({ _id: id }, item).exec();
    }
}
