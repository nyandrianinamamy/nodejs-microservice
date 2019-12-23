import { expect } from 'chai';
import { MockRepository } from './mock.repository';
// tslint:disable-next-line: no-any
interface IData {
    _id: string;
    name: string;
}

let data: IData[];
let repository: MockRepository<IData>;
// tslint:disable-next-line: no-big-function
describe.only('Mock repository', () => {
    beforeEach(() => {
        data = [
            {
                _id: '1',
                name: 'John'
            },
            {
                _id: '2',
                name: 'Doe'
            },
            {
                _id: '3',
                name: 'Foo'
            },
            {
                _id: '5',
                name: 'Foo'
            }
        ];
        repository = new MockRepository(data);
    });
    it('Should create item', async () => {
        await repository.create({ _id: '4', name: 'Bar' });
        const newData = repository.getData;
        expect(newData[newData.length - 1]._id).to.be.equal('4');
    });
    it('Should delete item', async () => {
        await repository.delete('3');
        const newData = repository.getData;
        expect(newData.length).to.be.equal(3);
    });
    it('Should find all items', async () => {
        const items: IData[] = (await repository.find({})) as IData[];
        expect(items.length).to.be.equal(data.length);
    });
    it('Should find item', async () => {
        const items: IData[] = (await repository.find({ name: 'Foo' })) as IData[];
        expect(items.length).to.be.equal(2);
    });
    it('Should find one item', async () => {
        const item: IData = (await repository.findOne({ name: 'Foo' })) as IData;
        expect(item._id).to.be.equal('3');
    });
    it('Should update one item', async () => {
        const updatedItem: IData = (await repository.update('5', { name: 'UpdatedFoo' })) as IData;
        const newData = repository.getData;
        expect(updatedItem.name).to.be.equal('UpdatedFoo');
        expect(newData[newData.length - 1].name).to.be.equal('UpdatedFoo');
    });
});
