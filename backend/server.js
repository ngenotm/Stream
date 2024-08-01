const express = require('express');
const dotEnv = require('dotenv');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDb = require('./config/db');

//! Config Env
dotEnv.config({ path: './config/config.env' });

//! cors options
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

//! Connect to Database
connectDb();

const app = express().use(express.json()).use(cors(corsOptions)).use(cookieParser());


//! Static Folder
app.use(express.static(path.join(__dirname, "public", "actor")));
app.use(express.static(path.join(__dirname, "public", "cover")));
app.use(express.static(path.join(__dirname, "public", "director")));
app.use(express.static(path.join(__dirname, "public", "profile")));
app.use(express.static(path.join(__dirname, "public", "thumbnail")));
app.use(express.static(path.join(__dirname, "public", "trailer")));
app.use(express.static(path.join(__dirname, "public", "videos")));


//! Routes
app.use('/api/user', require('./router/userRoutes'));
app.use('/api/movie', require('./router/movieRoutes'));
app.use('/api/series', require('./router/seriesRoutes'));
app.use('/api/actor', require('./router/actorRoutes'));
app.use('/api/director', require('./router/directorRoutes'));
app.use('/api/review', require('./router/reviewRoutes'));
app.use('/api/season', require('./router/seasonRoutes'));
app.use('/api/episode', require('./router/episodeRoutes'));
app.use("/api/support", require('./router/supportRoutes'));


app.listen(process.env.PORT, err => {
    if (err) return console.log(err);
    console.log(`Server is running on port ${process.env.PORT}`);
});