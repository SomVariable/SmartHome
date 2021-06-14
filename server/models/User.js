const {Schema, model} = require("mongoose");

const User = new Schema({
    email    : { type: String, required:true, unique: true},
    password : { type: String, required:true},
    name     : { type: String, required:true},
    post     : { type: String, required:true },
    status   : { type: Boolean, required:true }
});

module.exports = model('User', User);

// //http://localhost:5000/api/auth/registration
// {
//     "email": "test@gmail.com",
//     "password": "787898",
//     "name": "Valera",
//     "post": "owner",
//     "status": "at Home"
// }