import { userModel } from '../entity/user.mongoose.schema';
import { UserRepository } from './user.repository';

// Connect the user repository to the db
const userRepository: UserRepository = new UserRepository(userModel);

export { userRepository };
