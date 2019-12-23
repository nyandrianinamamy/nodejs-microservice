import { expect } from 'chai';
import { before } from 'mocha';
import { Document, Model, model, Schema } from 'mongoose';
import { clearDatabase, closeDatabase, connect } from '../utils/db.handler';
import { MongoRepository } from './mongo.repository';
// tslint:disable: no-any no-unused-expression
interface IData {
    _id: any;
    name: string;
}

interface IDataModel extends IData, Document {}
const dataSchema: Schema<IData> = new Schema<IData>({
    name: { type: String }
});
const dataModel: Model<IDataModel> = model<IDataModel>('Data', dataSchema);

class DataRepository extends MongoRepository<IDataModel, IData> {}

let data: IData[];
let repository: DataRepository;

// tslint:disable-next-line: no-big-function
describe('Mongo repository', () => {
    before(async () => {
        await connect();
    });
    beforeEach(async () => {
        data = [
            {
                _id: undefined,
                name: 'John'
            },
            {
                _id: undefined,
                name: 'Doe'
            },
            {
                _id: undefined,
                name: 'Foo'
            },
            {
                _id: undefined,
                name: 'Foo'
            }
        ];
        await dataModel.insertMany(data);
        repository = new DataRepository(dataModel);
    });
    afterEach(async () => {
        await clearDatabase();
    });
    after(async () => {
        await closeDatabase();
    });
    it('Should find all items', async () => {
        const items: IData[] = await repository.find({});
        expect(items.length).to.be.equal(data.length);
    });
    it('Should create item', async () => {
        const createdItem = await repository.create({ name: 'Bar' });
        const newData = await repository.find({});
        expect(newData[newData.length - 1]._id.toString()).to.be.eq(createdItem._id.toString());
    });
    it('Should delete item', async () => {
        let newData = await repository.find({});
        await repository.delete(newData[0]._id);
        newData = await repository.find({});
        expect(newData.length).to.be.equal(3);
    });
    it('Should find item', async () => {
        const items: IData[] = await repository.find({ name: 'Foo' });
        expect(items.length).to.be.equal(2);
    });
    it('Should find one item', async () => {
        const item: IData = (await repository.findOne({ name: 'Foo' })) as IData;
        expect(item.name).to.be.equal('Foo');
    });
    it('Should update one item', async () => {
        let newData = await repository.find({});
        // tslint:disable-next-line: max-line-length
        const updatedItem: IData = (await repository.update(newData[newData.length - 1]._id, { name: 'UpdatedFoo' })) as IData;
        expect(updatedItem.name).to.be.equal('UpdatedFoo');
        newData = await repository.find({});
        expect(newData[newData.length - 1].name).to.be.equal('UpdatedFoo');
    });
});
