const mongoose = require("mongoose");


const URI = process.env.SERVER_MONGODB_URI

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful to Database Ok");
        
    } catch (error) {
        console.error("Database Conn Failed !..");
        process.exit(0);
    }
};

module.exports = connectDb;