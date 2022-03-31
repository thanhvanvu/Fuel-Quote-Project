const User = require('../models/User');

const jwt = require('jsonwebtoken');

// need to use async/await because of connecting with database
exports.register = async (req, res, next) => {
    try {

        // req.body has name, email, password which user inputs it.
        // Use those data to create a user in DB ( using create() )
        const user = await User.create(req.body)

        // Create TOKEN after register
        const token = jwt.sign({ userID: user._id }, process.env.APP_SECRET);

        // response back to client if successfully connect to DB
        res.status(200).json({
            status: 'Success',
            data: { token, userName: user.name }
        });

    } catch (error) {
       res.json(error)
    }
}
