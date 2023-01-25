const mongoose = require('mongoose');

const UserSchema = mongoose.model('User', mongoose.Schema({
    username: String,
    password: String
}));

module.exports = UserSchema