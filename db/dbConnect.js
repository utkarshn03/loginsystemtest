const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {

    mongoose
        .connect(
            process.env.DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then(() => {
            console.log("Successfully connected to MongoDB")

        }).catch((error) => {
            console.error(error);
        })
}

module.exports =  dbConnect;