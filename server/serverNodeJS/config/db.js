const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://<username>thuyle08072004:ULvsGiJxnY73LjCx@cluster0.3azmp6t.mongodb.net/md18306";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
