export interface IWrite<I> {
    create(item: Partial<I>): Promise<I>;
    delete(id: string): Promise<boolean>;
    update(id: string, item: Partial<I>): Promise<I | null>;
}
