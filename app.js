var express =require('express')


//引入路由
var router = require('./routers/route')
var app =express();

const cors =require('cors')
app.use(cors());
app.use(express.static('public'));
app.use(router)

app.listen(3003,function () {
  console.log('数据库链接成功,端口号3003')
})