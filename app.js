const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

require('dotenv').config()

// add db conection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

const session = require('express-session');
app.use(session({
    secret: 'foo',    
    saveUninitialized: false,
    resave: false
}))

//this is the home page
app.get('/items',require('./routes/items'))

//this is the search result page
app.get('/search',require('./routes/items'))

//this is the type result page
app.get('/type',require('./routes/items'))

app.use(express.urlencoded({ extended: false }));  
app.use("/", require("./routes/login"));

app.listen(process.env.PORT,function(){
    console.log('server is running on port: ' + process.env.PORT)
})

