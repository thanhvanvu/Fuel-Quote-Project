const User = require('../models/User');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

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

exports.login = async (req, res, next) => {
    try {

        // find user email with parameter is information when user inputs in the form
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            //Error: Email is not correct

        }

        //body.password: pass client inputs in the form
        //user.password: pass is hashed
        //compareSync: function to compare 2 passwords
        if (bcrypt.compareSync(req.body.password, user.password)) {

            // Create TOKEN
            const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)

            // response back to client if successfully connect to DB
            res.status(200).json({
                status: 'Success',
                data: {
                    token,
                    userId: user._id,
                    name: user.name,
                    address1: user.address1,
                    address2: user.address2,
                    city: user.city,
                    state: user.state,
                    zipcode: user.zipcode
                }
            });

        } else {
            // Error: Password is not correct.
        }

    } catch (error) {
        res.json(error)
    }
}