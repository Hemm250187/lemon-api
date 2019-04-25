let curd = require("mongodb-curd");
let dbname = "lemon";

module.exports = {
    //删除
    removeBill(req, res, next) {
        let { _id } = req.query;
        if (!_id) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.remove(dbname, "bill", req.query, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1 })
            }
        })
    },
    addBill(req, res, next) {
        let { icon, name, Time, money, type, userId } = req.body;
        if (!icon || !name || !Time || !money || !type || !userId) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.insert(dbname, "bill", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1 })
            }
        })
    },
    findBill(req, res, next) {
        let { name, Time, type } = req.body;
        if (!Time) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        let query = { Time: new RegExp(Time) };
        if (type) {
            query.type = type;
        }
        if (name) {
            query.name = { $in: name.split(",") };
        }
        curd.find(dbname, "bill", query, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, data: rs })
            }
        })
    }
}