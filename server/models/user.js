const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username must be unique']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    profileImg: {
        type: String,
        default: '' // Store the filename of the image
    }
});

module.exports = mongoose.model('User', userSchema);
