export class UserBuilder {
  makeHash: any;

  constructor({ hasher }: any) {
    this.makeHash = hasher;
  }
  makeUser = (user: User) => {
    if (!user.name) {
      throw new Error("User must have a name.");
    }
    if (user.name.length < 2) {
      throw new Error("User name must have at least 3 characters");
    }
    return {
      ...user,
      hash: this.makeHash(user.name)
    };
  };
}

export interface User {
  _id: string;
  name: string;
  hash?: string;
}