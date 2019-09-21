import { UserRepositoryBuilder } from './user.repository';

const repository = {
    find: (conditions: object) => Promise.resolve(['user'])
};
const userRepository: UserRepositoryBuilder = new UserRepositoryBuilder({
    baseRepository: repository
});

export { userRepository };
