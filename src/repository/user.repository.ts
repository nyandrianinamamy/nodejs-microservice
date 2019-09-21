import { User } from '../entity/user.entity';

export interface BaseRepository<T> {
    find: (conditions: object) => Promise<T[]>;
}

export interface UserRepository extends BaseRepository<User> {}

export class UserRepositoryBuilder {
    // tslint:disable-next-line: no-any
    constructor({ baseRepository }: any) {
        this.baseRepository = baseRepository;
    }

    private readonly baseRepository: BaseRepository<User>;

    find = async (conditions: object) => this.baseRepository.find(conditions);
}
