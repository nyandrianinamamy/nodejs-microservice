import { IUser } from '../entity/user.entity';
import { IUserModel } from './../entity/user.mongoose.schema';
import { MongoRepository } from './mongo.repository';
// tslint:disable-next-line: no-empty-interface
export class UserRepository extends MongoRepository<IUserModel, IUser> {}
