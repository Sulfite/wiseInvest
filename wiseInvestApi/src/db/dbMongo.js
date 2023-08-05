const mongoose = require('mongoose');
mongoose.connect(process.env.URL_DB_Mongo)

// Separar os modelos


const userSchema = new mongoose.Schema({
	username: String,
    password: String
}, { collection: 'users'})

module.exports = { Mongoose: mongoose, UserSchema: userSchema }