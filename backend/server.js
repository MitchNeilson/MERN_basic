require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const itemsRoutes = require('./routes/items')
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/items',itemsRoutes)

console.log("TEST PUSH");
console.log("TESTING HERE");
console.log("TESTING HERE v2");
console.log("TESTING HERE v3");
console.log("TESTING HERE v4");
console.log("ENV: ",process.env.MONGO_URI); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to DB and listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
