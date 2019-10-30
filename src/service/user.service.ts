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
        return this.userRepository.create(user);
    }

    async getAllUsers(): Promise<IUser[]> {
        return this.userRepository.find({}).exec();
    }
}
