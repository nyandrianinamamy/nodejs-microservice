import { userRepository } from '.';
import { fakeDb } from '../../__test__/fixtures/db.fixture';
import { UserRepository } from './user.repository';

describe('User Repository on current db', () => {
    it('should find users', async () => {
        const result = await userRepository.find({});
        expect(result).toHaveLength(2);
    });
});

let fakeDbUserRepository: UserRepository;
describe('User Repository on fake db', () => {
    beforeAll(() => {
        fakeDbUserRepository = new UserRepository(fakeDb);
    });
    it('should find users', async () => {
        const result = await fakeDbUserRepository.find({});
        expect(result).toHaveLength(2);
    });
});
