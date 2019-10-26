import { fakeUserDb } from '../../__test__/fixtures/user.fixture';
import { UserRepository } from './user.repository';

// Connect the user repository to the db
const userRepository: UserRepository = new UserRepository(fakeUserDb);

export { userRepository };
