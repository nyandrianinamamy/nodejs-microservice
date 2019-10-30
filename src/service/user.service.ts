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

    async deleteUserById(id: string): Promise<boolean> {
        const user = await this.findUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return this.userRepository.delete(id);
    }

    async findUserById(id: string): Promise<IUser> {
        if (!id) {
            throw new Error('Id not supplied');
        }
        const user = await this.userRepository.findOne(id).exec();
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async getAllUsers(): Promise<IUser[]> {
        return this.userRepository.find({}).exec();
    }
}
