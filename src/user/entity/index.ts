import crypto from 'crypto';
import { Model, model } from 'mongoose';
import { bcrypt } from './../../utils/password.utils';
import { UserBuilder } from './user.entity';
import { IUserModel, userSchema } from './user.mongoose.schema';

const md5 = (text: string) =>
    crypto
        .createHash('md5')
        .update(text)
        .digest('hex');

const userBuilder = new UserBuilder({ hasher: md5, encrypter: bcrypt });
const userModel: Model<IUserModel> = model<IUserModel>('User', userSchema);

export { userBuilder, userModel };
