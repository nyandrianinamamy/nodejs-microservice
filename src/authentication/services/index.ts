import { authenticationRepository } from '../repository';
import { AuthenticationServiceBuilder } from './authentication.services';

const authenticationService = new AuthenticationServiceBuilder({ authenticationRepository });

export { authenticationService, authenticationRepository };
