var express = require('express')

var app = express();
app.use(express.static(__dirname))
app.listen(90)

var app2 = express();
app2.get("/",function(req,res){
    res.send('你好')
})
app2.listen(91)

const paths = ['/home/studentinfo','/home/dormitory','/home/property','/home/repair','/home/late','/home/late']
path = '/home/studentinfo'
console.log(paths.includes(path));