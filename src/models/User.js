const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    email: {type: String, maxLength: 255, require: true},
    firstName: {type: String, maxLength: 64},
    lastName: {type: String, maxLength: 64},
    description: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', User);