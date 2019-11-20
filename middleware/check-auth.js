const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log("Token verification begins");
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "Messi@0934");
        console.log("Token verified successfully");
        next();
    } catch (error) {
        console.log("Token verification failed");
        console.log("Error occured in authentication :: " + error)
        return res.status(401).json({
            message: 'Auth failed. Please send token.'
        });
    }
};
