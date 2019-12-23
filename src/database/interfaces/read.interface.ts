export interface IRead<I> {
    // tslint:disable: no-any
    find(conditions: Record<string, any>): Promise<I[] | I>;
    findOne(conditions: Record<string, any>): Promise<I | null>;
}
