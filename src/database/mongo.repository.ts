import { Document, Model } from 'mongoose';
import { buildFilter, buildSearch } from '../utils/query.utils';
import { BaseRepository } from './base.repository';

// tslint:disable: no-any
export const NOT_IMPLEMENTED = 'Repository Method not implemented.';

export abstract class MongoRepository<D extends Document, I> implements BaseRepository<I> {
    model: Model<any>;
    query = {};
    sortField = {};
    constructor(model: Model<D>) {
        this.model = model;
    }
    async create(item: Partial<I>): Promise<I> {
        const createdItem: I = await this.model.create(item);
        return Promise.resolve(createdItem);
    }

    async delete(id: string): Promise<boolean> {
        const deleted: boolean = await this.model.deleteOne({ _id: id }).then(() => true);
        return Promise.resolve(deleted);
    }

    filter(filter: Record<string, any>) {
        this.query = { ...this.query, ...buildFilter(filter) };
        return this;
    }

    async find(conditions: Record<string, any>): Promise<I[]> {
        let found: I[];
        if (this.sortField) {
            found = await this.model
                .find(conditions)
                .sort(this.sortField)
                .exec();
        } else {
            found = await this.model.find(conditions).exec();
        }
        return Promise.resolve(found);
    }

    findAndExec(): Promise<I[]> {
        const query = this.query;
        this.query = {};
        return this.find(query);
    }

    async findOne(conditions: Record<string, any>): Promise<I | null> {
        const item: I | null = await this.model.findOne(conditions).exec();
        return Promise.resolve(item);
    }

    search(search: string) {
        this.query = { ...this.query, ...buildSearch(search) };
        return this;
    }

    sort(sort: Record<any, any>) {
        this.sortField = { ...sort };
        return this;
    }

    async update(id: string, item: Partial<I>): Promise<I | null> {
        const updatedItem = await this.model.findOneAndUpdate({ _id: id }, item, { new: true }).exec();
        return Promise.resolve(updatedItem);
    }
}
