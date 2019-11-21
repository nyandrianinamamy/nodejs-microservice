import { MongoRepository } from '../../database/mongo.repository';
import { IAuthentication } from '../entity/authentication.entity';
import { IAuthenticationModel } from '../entity/authentication.mongoose.schema';
// tslint:disable-next-line: no-empty-interface
export class AuthenticationRepository extends MongoRepository<IAuthenticationModel, IAuthentication> {}
