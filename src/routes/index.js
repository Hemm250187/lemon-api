var express = require('express');
var router = express.Router();
let { removeBill, addBill, findBill } = require("./index-api");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//删除账单
router.get('/removeBill', removeBill);
//添加账单
router.post('/addBill', addBill);
//查找账单
router.post('/findBill', findBill);
module.exports = router;