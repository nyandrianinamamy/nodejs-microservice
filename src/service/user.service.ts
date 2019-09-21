import { makeUser } from '../entity';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';

export class UserServiceBuilder {
    userRepository: UserRepository;

    // tslint:disable-next-line: no-any
    constructor({ userRepository }: any) {
        this.userRepository = userRepository;
    }
    addUser = async (userInfo: User) => {
        const user = makeUser(userInfo);
        const exists = await this.userRepository.find({});
    };

    getAllUsers = async (): Promise<User[]> => this.userRepository.find({});
}
