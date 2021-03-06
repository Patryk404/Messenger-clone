const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: [
        {friend: {
            type:mongoose.SchemaTypes.ObjectId,ref: 'Account'
        },accepted: {
            type: Boolean
        },send: {
            type: Boolean
        }}
    ]
});

module.exports = mongoose.model('Account',accountSchema);