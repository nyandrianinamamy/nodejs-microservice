import { Document, Schema } from 'mongoose';
import { IUser } from './user.entity';

export interface IUserModel extends IUser, Document {}
export const userSchema: Schema<IUser> = new Schema<IUser>(
    {
        email: { type: String, unique: true },
        firstName: String,
        lastName: String,
        password: String,
        hash: String
    },
    { timestamps: true }
);

const textIndex = { firstName: 'text', lastName: 'text' };

userSchema.index(textIndex);
