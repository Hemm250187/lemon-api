var express = require('express');
var router = express.Router();
let { getCustom, getClassify, addClassify } = require("./classify-api");
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
//查找自定义分类图表
router.get('/getCustom', getCustom);
//查找分类图表
router.post('/getClassify', getClassify);
//添加自定义图标
router.post('/addClassify', addClassify);
module.exports = router;