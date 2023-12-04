const { auth } = require("express-oauth2-jwt-bearer");
const authConfig = require("./auth_config.json");

const checkJwt = auth({
  audience: authConfig.audience,
  issuerBaseURL: `https://dev-ph67t26xb8k4v2ix.us.auth0.com/`,
  algorithms: ["RS256"],
  logging: true,
});

module.exports = {
  checkJwt,
};
