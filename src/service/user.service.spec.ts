import { userService } from ".";

describe("User service", () => {
  test("should find all users", async () => {
    const users = await userService.getAllUsers();
    expect(users).toBeDefined();
  });
});
