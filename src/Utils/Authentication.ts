import passport from 'passport';

export const passportAuthentication = passport.authenticate('jwt', { session: false });