import { expect } from 'chai';
import { Mongoose } from 'mongoose';
import { userBuilder } from '.';
import { UserModel } from './user.mongoose.schema';

// tslint:disable: no-hardcoded-credentials
export const JOHN_DOE = {
    _id: undefined,
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'johndoejr',
};

describe('User builder', () => {
    it('should make an user object', () => {
        const user = userBuilder.makeUser(JOHN_DOE);
        expect(user.firstName).to.equal('John');
        expect(user.lastName).to.equal('Doe');
        expect(user.hash.length).to.be.above(1);
    });
});

describe('User error cases', () => {
    it('should not create an user with short password', () => {
        expect(() =>
            userBuilder.makeUser({ ...JOHN_DOE, password: 'john' }),
        ).to.throw();
    });
    it('should not create an user with short name', () => {
        expect(() =>
            userBuilder.makeUser({ ...JOHN_DOE, firstName: 'jo' }),
        ).to.throw();
    });
});
describe('User in db', () => {
    before(() => {
        const mongoose = new Mongoose();
        const userDbUrl = 'mongodb://localhost:27017/userTestDb';
        mongoose.connect(userDbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        mongoose.connection.on('connected', () =>
            // tslint:disable-next-line: no-console
            console.log('Database connected'),
        );
    });
    xit('should create user model', function() {
        const user = userBuilder.makeUser(JOHN_DOE);
        this.timeout(5000);
        const createdUser = new UserModel(user);
        return createdUser
            .save()
            .then((result) => Promise.resolve())
            .catch((e) => Promise.reject(e));
    });
});
