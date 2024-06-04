const jwt = require("jsonwebtoken");
const secret = "Piyush$123@$";

/* This function generates tokens 
  This token when pasted in jwt.io displays the payload mapped with it.
*/
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

/* To verify the token with our secretKey */
function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
