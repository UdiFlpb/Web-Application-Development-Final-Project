const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

require('dotenv').config()

//this is the home page
app.get('/items',require('./routes/items'))

//this is the search result page
app.get('/search',require('./routes/items'))

//this is the type result page
app.get('/type',require('./routes/items'))

app.listen(process.env.PORT,function(){
    console.log('server is running on port: ' + process.env.PORT)
})

