const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require("cors");
const connectDB = require('./server/database/connection');

const app = express();
app.use(cors());
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;
// set view engine
// app.set("view engine", "ejs");
//app.set("view", path.resolve(__dirname,"views/"))

// parse body
app.use(bodyparser.urlencoded({extended:true}));

// log requests
app.use(morgan('tiny'))

// mongodb connection
connectDB();

// LOAD ASSETS
// app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
// app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Load router
app.use("/", require('./server/routes/router'));
// Connecting to React Front End
app.get('/express_backend', (req, res) => {
    res.send({express: 'Express Connected to React'});
})


app.listen(PORT, () => { console.log(`server running on localhost port ${PORT}`) });