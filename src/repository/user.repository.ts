import { User } from "../entity/user.entity";

export interface BaseRepository {
  find: (conditions: any) => Promise<any[]>;
}

export interface UserRepository extends BaseRepository {}

export class UserRepositoryBuilder {
  private baseRepository: BaseRepository;
  constructor({ baseRepository }: any) {
    this.baseRepository = baseRepository;
  }
  find = async (conditions: any) => {
    const result = await this.baseRepository.find(conditions);
    return result;
  };
}
