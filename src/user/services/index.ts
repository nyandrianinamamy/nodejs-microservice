import { userRepository } from '../repository';
import { UserServiceBuilder } from './user.services';

const userService = new UserServiceBuilder({ userRepository });

export { userService, userRepository };
