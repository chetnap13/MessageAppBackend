const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   message:{
       type: String
   }
});

module.exports = mongoose.model('User', userSchema);