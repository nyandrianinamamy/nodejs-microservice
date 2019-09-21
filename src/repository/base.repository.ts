import { IRead } from './interfaces/read.interface';
import { IWrite } from './interfaces/write.interface';

// tslint:disable-next-line: no-any
export type IDb = IRead<any> & IWrite<any>;

export const NOT_IMPLEMENTED = 'Method not implemented.';

export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
    constructor(db: IDb) {
        this.db = db;
    }
    private readonly db: IDb;
    create(item: T): Promise<boolean> {
        throw new Error(NOT_IMPLEMENTED);
    }
    delete(id: string): Promise<boolean> {
        throw new Error(NOT_IMPLEMENTED);
    }

    // tslint:disable-next-line: no-any
    find(conditions: any): Promise<T[]> {
        return this.db.find(conditions);
    }
    findOne(id: string): Promise<T> {
        throw new Error(NOT_IMPLEMENTED);
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error(NOT_IMPLEMENTED);
    }
}
