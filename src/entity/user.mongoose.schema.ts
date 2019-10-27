import { Document, Model, model, Schema } from 'mongoose';
import { IUser } from './user.entity';

// tslint:disable: variable-name
export interface IUserModel extends IUser, Document {
    fullName(): string;
}
export const userSchema: Schema<IUser> = new Schema<IUser>({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    hash: String,
    createdAt: Date,
    updatedAt: Date,
});

userSchema.pre('save', function(next) {
    if (!this.get('createdAt')) {
        const now = new Date();
        this.set('createdAt', now);
    }
    next();
});

userSchema.methods.fullName = function(): string {
    return `${this.firstName.trim()} ${this.lastName.trim()}`;
};

export const userModel: Model<IUserModel> = model<IUserModel>(
    'User',
    userSchema,
);
