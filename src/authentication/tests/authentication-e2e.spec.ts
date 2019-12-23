import chai from 'chai';
import chaiHttp from 'chai-http';
import { before } from 'mocha';
import { App } from '../../app/app.server';
import { IUser } from '../../user/entity/user.entity';
import { userService } from '../../user/services';
import { clearDatabase, closeDatabase, connect } from '../../utils/db.handler';
process.env.NODE_ENV = 'test';
const app = new App();
chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;
const prefix = '/api/v1';

// tslint:disable: no-unused-expression no-hardcoded-credentials no-duplicate-string
const JOHN_DOE = {
    _id: undefined,
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'johndoejr'
};

let user: IUser;

// tslint:disable-next-line: no-any
const testErrorMessage = (cred: Partial<IUser>, done: Mocha.Done, message: string) =>
    chai
        .request(app.server)
        .post(`${prefix}/authentication/login`)
        .send(cred)
        .end((err, res) => {
            res.should.have.status(500);
            assert.equal(res.body.data.message, message);
            done();
        });

describe.only('Authentication e2e', () => {
    before(async () => {
        await connect();
        await app.init();
    });
    after(async () => {
        await closeDatabase();
        process.exit();
    });
    beforeEach(async () => {
        user = await userService.create(JOHN_DOE);
    });
    afterEach(async () => {
        await clearDatabase();
    });
    it('Should log in user', (done) => {
        const cred = { email: 'john@example.com', password: 'johndoejr' };
        chai.request(app.server)
            .post(`${prefix}/authentication/login`)
            .send(cred)
            .end((err, res) => {
                res.should.have.status(200);
                assert.isOk(res.body.data.token);
                done();
            });
    });
    it('Should send correct message on incorrect email', (done) => {
        const cred = { email: 'incorrect@example.com', password: 'incorrect' };
        testErrorMessage(cred, done, 'Utilisateur inexistant');
    });
    it('Should send correct message on incorrect password', (done) => {
        const cred = { email: 'john@example.com', password: 'incorrect' };
        testErrorMessage(cred, done, 'Mot de passe incorrect');
    });
});
