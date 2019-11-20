const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log("Token ::" + token)
        const decoded = jwt.verify(token, "messi@0934");
        console.log("Decode response :: " + decoded)
        req.userData = decoded;
        next();
    } catch (error) {
        console.log("Error occured in authentication :: " + error)
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
