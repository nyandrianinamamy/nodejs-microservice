import { buildFilter, buildSearch } from '../utils/query.utils';
import { BaseRepository } from './base.repository';

// tslint:disable: no-any
export const NOT_IMPLEMENTED = 'Repository Method not implemented.';

export class MockRepository<I extends { [P in any]: any }> implements BaseRepository<I> {
    query = {};
    constructor(data: I[]) {
        this.data = data;
    }
    private data: I[];

    public get getData(): I[] {
        return this.data;
    }

    create(item: Partial<I>): Promise<I> {
        this.data.push(item as I);
        return Promise.resolve(item as I);
    }

    delete(id: string): Promise<boolean> {
        this.data = this.data.filter((item) => item._id !== id);
        return Promise.resolve(true);
    }

    filter(filter: Record<string, any>) {
        this.query = { ...this.query, ...buildFilter(filter) };
        return this;
    }

    find(conditions: Record<any, any>): Promise<I[]> {
        let result: I[] = [];
        if (Object.entries(conditions).length === 0 && conditions.constructor === Object) {
            result = this.data;
        } else {
            Object.keys(conditions).forEach((key) => {
                result = [...this.data.filter((item) => item[key] === conditions[key])];
            });
        }
        return Promise.resolve(result);
    }

    findAndExec() {
        return this.find({});
    }
    async findOne(conditions: Record<string, any>): Promise<I | null> {
        return Promise.resolve((await this.find(conditions))[0]);
    }

    search(search: string) {
        this.query = { ...this.query, ...buildSearch(search) };
        return this;
    }

    async update(id: string, item: Partial<I>): Promise<I | null> {
        const doc = await this.findOne({ _id: id });
        const updatedItem: I = { ...doc, ...(item as I) };
        this.data = this.data.map((d) => {
            if (d._id === id) {
                return { ...d, ...updatedItem };
            }
            return { ...d };
        });
        return Promise.resolve(updatedItem);
    }
}
