import { userRepository } from '../../user/repository';
import { AuthenticationServiceBuilder } from './authentication.services';

const authenticationService = new AuthenticationServiceBuilder({ userRepository });

export { authenticationService };
