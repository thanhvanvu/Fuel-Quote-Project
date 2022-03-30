const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Name must be required']
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Email must be required']
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'Password must be required'],
        minlength: [6, 'Password must be at least 6 characters']
    },

    address1: {
        type: String,
        trim: true,
        default: "",
        
    },

    address2: {
        type: String,
        trim: true,
        default: ""
    },

    city: {
        type: String,
        trim: true,
        default: ""
    },

    state: {
        type: String,
        trim: true,
        default: ""
    },

    zipcode: {
        type: String,
        trim: true,
        default: ""
    }
});

const User = mongoose.model('User', userSchema)

// exports to use it later 
module.exports = User