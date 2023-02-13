const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    code: Number,
    name : {
        type : String,
        required: true
    },
    dob: String,
    department: String,
    salary: Number,
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;