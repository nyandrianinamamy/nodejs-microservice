import { AuthenticationRoutesBuilder } from './authentication.routes';

const authenticationRouter = new AuthenticationRoutesBuilder().router;

export { authenticationRouter };
