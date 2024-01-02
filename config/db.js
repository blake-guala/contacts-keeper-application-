const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectMongoDB = async () => {
    try {
        await mongoose.connect(db)
        console.log('mongoDB connected successfully...');
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = connectMongoDB