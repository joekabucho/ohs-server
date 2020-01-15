const expressJwt = require('express-jwt');
const Secret = require('../config/dev').Secret;
const User = require('../api/users/users.model');

function jwtRouteAuth() {

    const secret = Secret;
    return expressJwt({ secret, isRevoked, }).unless({
        path: [
            // Public routes that do not require authentication
            '/api/user/login',
            // '/authenticate'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await User.findById(payload.sub);

    // revoke token if user no longer exists
    if (!user){
        return done(null, true);
    }

    done();
}

module.exports = jwtRouteAuth;
