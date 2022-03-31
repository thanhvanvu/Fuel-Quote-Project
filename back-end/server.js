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

// Connect AuthRoute to server.js
const authRoute = require('./routes/authRoute');


// Mount the route
app.use('/api/v1/auth', authRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})