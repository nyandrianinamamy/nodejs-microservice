import { Document, DocumentQuery } from 'mongoose';

export interface IRead<D extends Document, I> {
    // tslint:disable: no-any
    find(conditions: any): DocumentQuery<D[], D>;
    findOne(conditions: Record<string, any>): DocumentQuery<D | null, D>;
}
