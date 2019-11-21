import { Document, Model, model, Schema } from 'mongoose';
import { IAuthentication } from './authentication.entity';

export interface IAuthenticationModel extends IAuthentication, Document {}
export const authenticationSchema: Schema<IAuthentication> = new Schema<IAuthentication>(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);

const textIndex = { name: 'text', description: 'text' };

authenticationSchema.index(textIndex);
