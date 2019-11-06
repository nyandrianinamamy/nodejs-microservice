import chai from 'chai';
import chaiHttp from 'chai-http';
import { before } from 'mocha';
import { App } from '../app/app.server';
import { userBuilder } from '../entity';
import { IUser } from '../entity/user.entity';
import { JOHN_DOE } from '../entity/user.entity.spec';
import { userModel } from '../entity/user.mongoose.schema';
import * as dbHandler from './db.handler';
process.env.NODE_ENV = 'test';

const app = new App();
chai.use(chaiHttp);
const should = chai.should();
const prefix = '/api/v1';
let johnDoe: IUser;
let user: IUser;

// tslint:disable-next-line: no-big-function
describe('User end to end', () => {
    before(async () => {
        await dbHandler.connect();
        await app.init();
    });
    after(async () => {
        await dbHandler.closeDatabase();
    });
    beforeEach(async () => {
        user = userBuilder.makeUser(JOHN_DOE);
        johnDoe = await userModel.create(user);
    });
    afterEach(async () => {
        await dbHandler.clearDatabase();
    });
    describe('/GET users', () => {
        it('should get all users', (done) => {
            chai.request(app.server)
                .get('/api/v1/user/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.an('array');
                    done();
                });
        });
        it('should get user John Doe', (done) => {
            chai.request(app.server)
                .get(`${prefix}/user/${johnDoe._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.an('object');
                    res.body.data.firstName.should.be.equal(johnDoe.firstName);
                    done();
                });
        });
        it('should create user', (done) => {
            chai.request(app.server)
                .post(`${prefix}/user/create`)
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.an('object');
                    res.body.data.email.should.be.equal(user.email);
                    done();
                });
        });
    });
});
