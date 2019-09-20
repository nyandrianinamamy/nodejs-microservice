import crypto from 'crypto';
import { UserBuilder } from './user.entity';

const md5 = (text: string) =>
  crypto
    .createHash('md5')
    .update(text)
    .digest('hex');

const makeUser = new UserBuilder({ hasher: md5 }).makeUser;

export { makeUser };
