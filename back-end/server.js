const express = require('express');

const app = express ();

// cors is used to connect backend and frontend
const cors = require('cors');

app.use( cors() );

// Body Parser
app.use(express.json())

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            quote: [{
                content: "hello",
                data: "10/20/2012"
            }]
        }
    })
})

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})