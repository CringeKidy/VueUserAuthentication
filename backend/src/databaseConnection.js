require("dotenv").config()
const mongoose = require('mongoose')
mongoose.set("strictQuery", false)

async function databaseConnect() {
    await mongoose.connect(process.env.DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    var databaseConnection = mongoose.connection.readyState;

    if (databaseConnection === 1) {
        console.log("Database connected yay!")
    }

    if (databaseConnection === 0) {
        console.log('there was an error connecting to database')
    }
}

module.exports = databaseConnect();
