const express = require('express');
const v1ApiRoutes = require('./routes/index');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const app = express();
app.use(bodyParser.json());

app.use('/api', v1ApiRoutes);


app.post('/user', ClerkExpressRequireAuth(), );

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});

