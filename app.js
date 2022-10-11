const express = require('express');

// קריאה לdb
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION_STRING, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

const app = express();

const session = require('express-session'); 

app.use(express.static('public'))

require('dotenv').config()//אני רוצה שהפרוייקט יכיר את כל הסביבת עבודה שלנו
app.get('/',function(req,res){ //דף נחיתה- איזה כתובת היוזר הכניס כלומר דף הבית,ת
    res.sendFile(__dirname+'/index.html')

})

app.use(session({
    secret: 'foo',    
    saveUninitialized: false,
    resave: false
}))

app.get('/login',function(req,res){//דף התחברות
    res.sendFile(__dirname+'/login.html')
    
})
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));  
app.use("/", require("./routes/login"));
app.listen(process.env.PORT);



