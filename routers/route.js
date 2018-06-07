var express =require('express');
var router =express.Router();

var index =require('../data/index.json');
var item =require('../data/item.json')
var comment =require('../data/comment.json')
var service =require('../data/service.json')


//创建路由
//首页
router.get('/index',function (req,res) {
  res.send(index)
})
//服务商
router.get('/service',function (rep,res) {
  res.send(service)
})


//暴露
module.exports =router;