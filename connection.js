const mongoose = require('mongoose');

const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://ambi:abcd1234@cluster0.6tb4z.mongodb.net/myexpdb?retryWrites=true&w=majority");
}

module.exports= ConnectDB;