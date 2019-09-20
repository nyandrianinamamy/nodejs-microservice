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
    return this.baseRepository.find(conditions);
  };
}
