const jwt = require('jsonwebtoken');
const { default: config } = require('../config/config');


module.exports = (req, res, next) => {
    const autHeader = req.get('Authorization');
    if (!autHeader) {
        const error = new Error('Anthorization failed!');
        error.statusCode - 401;
        throw error;
    }
    const token = autHeader.split(' ')[1]
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, config.secret.secret);
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
      const error = new Error ('Not authenticated.');
      error.statusCode = 401;
      throw error;  
    }
    req.userId = decodedToken.userId;
    next();
};