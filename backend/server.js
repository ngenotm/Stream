const express = require('express');
const dotEnv = require('dotenv');
const path = require('path');
const cors = require('cors');

const connectDb = require('./config/db');


//! Config Env
dotEnv.config({ path: './config/config.env' });

//! Connect to Database
connectDb();

const app = express().use(express.json()).use(cors());


//! Static Folder
app.use(express.static(path.join(__dirname, "public", "cover")));
app.use(express.static(path.join(__dirname, "public", "profile")));
app.use(express.static(path.join(__dirname, "public", "actor")));
app.use(express.static(path.join(__dirname, "public", "thumbnail")));


//! Routes
app.use('/api', require('./router/userRoutes'));
app.use('/api', require('./router/actorRoutes'));
app.use('/api', require('./router/movieRoutes'));


app.listen(process.env.PORT, err => {
    if (err) return console.log(err);
    console.log(`Server is running on port ${process.env.PORT}`);
});