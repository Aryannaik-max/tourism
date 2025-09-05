const express = require('express');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
 
app.post('/user', ClerkExpressRequireAuth(), );

