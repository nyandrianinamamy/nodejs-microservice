import { userBuilder } from '../entity';
import { IUser } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';

export class UserServiceBuilder {
    userRepository: UserRepository;

    // tslint:disable-next-line: no-any
    constructor({ userRepository }: any) {
        this.userRepository = userRepository;
    }
    async addUser(userInfo: IUser): Promise<IUser> {
        const user: IUser = userBuilder.makeUser(userInfo);
        const exists = await this.userRepository.findOne(user.email);
        if (exists) {
            return exists;
        }
        return this.userRepository.create(user);
    }

    getAllUsers = async (): Promise<IUser[]> => this.userRepository.find({});
}
