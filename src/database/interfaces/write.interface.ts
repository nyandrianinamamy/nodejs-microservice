import { Document } from 'mongoose';

export interface IWrite<D extends Document, I> {
    create(item: Partial<I>): Promise<D>;
    delete(id: string): Promise<boolean>;
    update(id: string, item: Partial<I>): Promise<D | null>;
}
