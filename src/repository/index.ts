import { fakeDb } from '../../__test__/fixtures/db.fixture';
import { UserRepository } from './user.repository';

// Connect the user repository to the db
const userRepository: UserRepository = new UserRepository(fakeDb);

export { userRepository };
