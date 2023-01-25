require("dotenv").config();

const databaseUtils = require('./src/databaseUtils');
require('./src/databaseConnection')

const EXPRESS = require('express');
const mongoose = require("mongoose");
const app = EXPRESS()
const cors = require('cors')

const axios = require("axios");
const { response } = require("express");

app.use(cors())
app.use(EXPRESS.json())

app.get('/', (req, res) => {
    res.send(403)
})

app.post('/login', (req, res) => {
    const Userdata = req.body.User

    const Username = Userdata[0].Username
    const Password = Userdata[1].Password

    var response = databaseUtils.userLogin(Username, Password)

    if (response = 404) {
        return res.send({ UserExists: response });
    }






})

app.listen(process.env.PORT, () => { console.log(`Website is running on http://127.0.0.1:${process.env.PORT}`) })



// On process exit it will disconnect to the database. 
process.on('SIGINT', function () {
    console.log("Closing connection to database and Exiting...");
    mongoose.connection.close()
    process.exit();
});
setInterval(() => { }, 1000);
