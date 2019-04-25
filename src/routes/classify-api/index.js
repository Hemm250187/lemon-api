let curd = require("mongodb-curd");
let dbname = "lemon";

module.exports = {
    //自定义分类
    getCustom(req, res, next) {
        curd.find(dbname, "custom", {}, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, data: rs })
            }
        })
    },
    //分类业务逻辑
    getClassify(req, res, next) {
        //{type,userId}
        let { type, userId } = req.body
        if (!type || !userId) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.find(dbname, "classify", { 'type': type, 'userId': { $in: ['*', userId] } }, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, data: rs })
            }
        })
    },
    //添加自定义图标
    addClassify(req, res, next) {
        //{type,userId}
        let { type, userId, icon, name } = req.body;
        if (!type || !userId || !icon || !name) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.insert(dbname, "classify", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1 })
            }
        })
    }
}