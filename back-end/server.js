// config dotenv
require('dotenv').config()
const port = process.env.APP_PORT;

// connect DB
const {connectDB} = require('./configs/db')

connectDB();

const express = require('express');

const app = express ();

// cors is used to connect backend and frontend
const cors = require('cors');

app.use( cors() );

// Body Parser
app.use(express.json())

// Connect AuthRoute, quoteRoute to server.js
const authRoute = require('./routes/authRoute');
const quoteRoute = require('./routes/quoteRoute');


// Mount the route
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/quotes', quoteRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})