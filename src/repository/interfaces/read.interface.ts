import { Document, DocumentQuery } from 'mongoose';

export interface IRead<D extends Document, I> {
    // tslint:disable-next-line: no-any
    find(conditions: any): DocumentQuery<D[], D>;
    findOne(id: string): DocumentQuery<D | null, D>;
}
