const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://muhammadumarnazirhussain:Zumarn7770@cluster0.zb8b9lj.mongodb.net/BackendProject')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

module.exports = mongoose.connection;