import { IUser } from '../entity/user.entity';
import { MongoRepository } from './mongo.repository';

// tslint:disable-next-line: no-empty-interface
export class UserRepository extends MongoRepository<IUser> {}
