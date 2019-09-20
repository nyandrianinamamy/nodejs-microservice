import { makeUser } from "../entity";
import { UserRepository } from "../repository/user.repository";
import { User } from "../entity/user.entity";

export class UserServiceBuilder {
  userRepository: UserRepository;

  constructor({ userRepository }: any) {
    this.userRepository = userRepository;
  }
  addUser = async (userInfo: User) => {
    const user = makeUser(userInfo);
    const exists = await this.userRepository.find({});
  };

  getAllUsers = async (): Promise<User[]> => {
    const results: User[] = await this.userRepository.find({});
    return results;
  };
}
