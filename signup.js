// signup.js
const express = require('express');
const bodyParser = require('body-parser');
const { AuthenticationClient } = require('auth0');
require('dotenv').config();

const app = express();
const port = 3000;

const auth = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
});

app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  try {
    const { data: user } = await auth.database.signUp({
      email: req.body.email,
      password: req.body.password,
      connection: 'Username-Password-Authentication',
    });
    res.status(200).json({ message: 'User signed up successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Signup microservice is running on port ${port}`);
});
