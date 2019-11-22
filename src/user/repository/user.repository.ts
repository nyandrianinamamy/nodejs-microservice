import { MongoRepository } from '../../database/mongo.repository';
import { IUser } from '../entity/user.entity';
import { IUserModel } from '../entity/user.mongoose.schema';
// tslint:disable-next-line: no-empty-interface
export class UserRepository extends MongoRepository<IUserModel, IUser> {}
