//passport strategy for authenticating with google
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

//client id and client secrets
const GOOGLE_CLIENT_ID = '426354452268-498jicuhcj82ut24vat2m6s55ap8nokp.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';


passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  //middleware funtion
  passReqToCallback: true,
},
                   
                                
                                
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));



//used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user);
  //where is this user going ?Are we supposed to access this anywhere?
});


//used to deserialize the user
passport.deserializeUser(function(user, done) {
  done(null, user);
});
 
