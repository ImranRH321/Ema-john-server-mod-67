const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()
// middleware 
app.use(cors())
app.use(express.json)

app.get('/', (req, res) => {
    res.send('Ema John server is Running ')
})

app.listen(port, () => {
    console.log('Ema Jhon server is Running port = ', port);
})