const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

require('dotenv').config()//אני רוצה שהפרוייקט יכיר את כל הסביבת עבודה שלנו
app.get('/',function(req,res){ //דף נחיתה- איזה כתובת היוזר הכניס כלומר דף הבית,ת
    res.sendFile(__dirname+'/index.html')

})

app.get('/login',function(req,res){//דף התחברות
    res.sendFile(__dirname+'/login.html')
    
})
app.listen(3000,function(){
    console.log('server is running on port 3000')
})

