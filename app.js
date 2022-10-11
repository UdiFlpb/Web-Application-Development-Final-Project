const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

require('dotenv').config()//אני רוצה שהפרוייקט יכיר את כל הסביבת עבודה שלנו

//this is the home page
app.get('/items',require('./routes/items'))

app.listen(3000,function(){
    console.log('server is running on port 3000')
})

