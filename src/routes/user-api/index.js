let curd = require("mongodb-curd");
let dbname = "lemon";

module.exports = {
    getUser(req, res, next) {
        curd.find(dbname, "user", {}, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, data: rs })
            }
        }, {
            limit: 1,
        })
    }
}