import { authenticationModel } from '../entity';
import { AuthenticationRepository } from './authentication.repository';

// Connect the authentication repository to the db
const authenticationRepository: AuthenticationRepository = new AuthenticationRepository(authenticationModel);

export { authenticationRepository };
