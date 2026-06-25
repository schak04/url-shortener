const mongoose = require('mongoose');

const connectToDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error("Error connecting DB:", err.message);
    }
};

module.exports = connectToDB;