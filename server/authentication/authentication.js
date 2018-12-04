const moment = require('moment');
const jwt = require('jwt-simple');
const config = require('../config/config');

// Encode (username to token)
function encodeToken(username) {
  const payload = {
    exp: moment().add(10, 'days').unix(),
    iat: moment().unix(),
    sub: username
  };

  return jwt.encode(payload, config.secretKey, null, null)
}

// Decode (token to username)
function decodeToken(token, cb) {
  try {
  const payload = jwt.decode(token, config.secretKey, null, null);

  const now = moment.now();

  // Check if the token is expired
  if (now > payload.exp) {
    console.log('Token has expired');
  }

  cb(null, payload);
  } catch (error) {
    cb(error, null);
  }



}

module.exports = {
  encodeToken,
  decodeToken
};
