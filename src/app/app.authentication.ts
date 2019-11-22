import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { env } from '../config/env.config';
import { comparePassword } from '../utils/password.utils';
import { userRepository } from './../user/repository';

const localStrategy = new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    const user = await userRepository.findOne({ email }).exec();
    if (!user) {
        return done(null, false, { message: 'Utilisateur inexistant' });
    }
    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
        return done(null, false, { message: 'Mot de passe incorrect' });
    }
    return done(null, user);
});

const jwtStrategy = new JwtStrategy(
    {
        secretOrKey: env.jwt.secretKey,
        jwtFromRequest: ExtractJwt.fromExtractors([ExtractJwt.fromAuthHeaderAsBearerToken()])
    },
    async (payload, done) => {
        const user = await userRepository.findOne({ _id: payload._id }).exec();
        return user ? done(null, user) : done(null, false);
    }
);

passport.use(localStrategy);
passport.use(jwtStrategy);

export default passport;
