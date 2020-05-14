const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const secret = process.env.JWT_SECRET || 'jiu jitsu secret word is safe';


        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {

                res.status(401).json({ message: 'Invalid Credentials, please login and try again.' });
            } else {
                req.decodedJwt = decodedToken;

                next();
            }
        })


    } else {
        res.status(400).json({ message: 'No credentials provided' });
    }
};
