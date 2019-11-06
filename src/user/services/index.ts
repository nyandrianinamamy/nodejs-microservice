import { userRepository } from '../repository';
import { UserServiceBuilder } from './user.service';

const userService = new UserServiceBuilder({ userRepository });

export { userService, userRepository };
