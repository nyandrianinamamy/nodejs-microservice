import { UserRepositoryBuilder } from "./user.repository";

const repository = {
  find: (conditions: any) =>
    new Promise((resolve, reject) => {
      resolve(["user"]);
    })
};
const userRepository: UserRepositoryBuilder = new UserRepositoryBuilder({
  baseRepository: repository
});

export { userRepository };
