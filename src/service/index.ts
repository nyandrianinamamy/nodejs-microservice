import { UserServiceBuilder } from "./user.service";
import { userRepository } from "../repository/";

const userService = new UserServiceBuilder({ userRepository });

export { userService, userRepository };
