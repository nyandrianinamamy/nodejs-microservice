import { MongoRepository } from '../../database/mongo.repository';
import { IUser } from '../entities/user.entity';
import { IUserModel } from '../entities/user.mongoose.schema';
// tslint:disable-next-line: no-empty-interface
export class UserRepository extends MongoRepository<IUserModel, IUser> {}
