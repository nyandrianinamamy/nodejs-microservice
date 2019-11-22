import { userBuilder } from '../entity';
import { IUser } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';

const NOT_FOUND = 'User not found';

export class UserServiceBuilder {
    userRepository: UserRepository;

    // tslint:disable-next-line: no-any
    constructor({ userRepository }: any) {
        this.userRepository = userRepository;
    }
    async create(userInfo: IUser): Promise<IUser> {
        const user: IUser = await userBuilder.makeUser(userInfo);
        return this.userRepository.create(user);
    }

    async deleteById(id: string): Promise<boolean> {
        const user = await this.findById(id);
        if (!user) {
            throw new Error(NOT_FOUND);
        }
        return this.userRepository.delete(id);
    }

    // tslint:disable-next-line: no-any
    async find(params: any): Promise<IUser[]> {
        const { sort, skip, limit, search, ...filter } = params;
        return this.userRepository
            .filter(filter)
            .search(search)
            .findAndExec();
    }

    async findById(id: string): Promise<IUser> {
        if (!id) {
            throw new Error('Id not supplied');
        }
        const user = await this.userRepository.findOne({ _id: id }).exec();
        if (!user) {
            throw new Error(NOT_FOUND);
        }
        return user;
    }

    async update(id: string, data: IUser): Promise<IUser> {
        const user = await this.userRepository.update(id, data);
        if (!user) {
            throw new Error(NOT_FOUND);
        }
        return user;
    }
}
