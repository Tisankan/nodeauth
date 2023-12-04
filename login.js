const express = require("express");
const bodyParser = require("body-parser");
const { checkJwt } = require("./authMiddleware");
const authConfig = require('./auth_config.json');



const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = authConfig.appOrigin || `http://localhost:${appPort}`;

app.use(bodyParser.json());
app.use(checkJwt);

app.post("/login", (req, res) => {
  res.status(200).json({ message: "User logged in successfully", user: req.user });
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
