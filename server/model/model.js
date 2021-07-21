const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    width: {
        type: "number",
        required: true,
    },
    height: {
        type: "number",
        required: true
    },
    color: {
        type: String,
        required: true
    },
    name: { 
        type: String,
        required: false
    }
})

const Userdb = mongoose.model('userdb',schema);
module.exports = Userdb;