import { Model, model } from 'mongoose';
import { AuthenticationBuilder } from './authentication.entity';
import { IAuthenticationModel, authenticationSchema } from './authentication.mongoose.schema';

const authenticationBuilder = new AuthenticationBuilder();
const authenticationModel: Model<IAuthenticationModel> = model<IAuthenticationModel>('Authentication', authenticationSchema);

export { authenticationBuilder, authenticationModel };
