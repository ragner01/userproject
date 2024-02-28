require(dotenv).config()
const express = require('express')
const mongoose = require(`mongoose`)


const app = express()

app.listen(PORT,() => {
    console.log(`server is running on  http://localhost:${PORT}`);
})