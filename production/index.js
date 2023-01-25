const express = require('express');
const app = express()

app.use(express.static('dist'))


app.listen(8081, () => { console.log("website is runing on http://127.0.0.1:8081") })