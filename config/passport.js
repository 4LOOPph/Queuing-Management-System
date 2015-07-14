'use strict';

var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User_Account');
var bcrypt = require('bcrypt-nodejs');



module.exports = function(passport) {

    passport.use('user', new LocalStrategy(
        function(username, password, done) {
            User.findOne({
                    u_email: username,
                    u_isverified: 1
                }, verifyAuth(password, done))
                .populate('roleID');
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    function verifyAuth(password, done) {
        return function(err, user) {
            if (err) {
                console.log('error:', err);
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            if (!bcrypt.compareSync(password, user.u_password)) {
                return done(null, false);
            }

            return done(null, {
                email: user.u_email,
                _id: user._id,
                log_inDate: user.log_inDate,
                roleID: user.roleID
            });
            // return done(null, user);
        }
    }
};
