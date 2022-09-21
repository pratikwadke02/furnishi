const db = require('../../models');
const Manager = db.manager;

exports.create = async (req, res) => {
    console.log(req.body);
    Manager.create(req.body).then(data => {
        res.send(
            {
                message: "Manager added",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    Manager.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}
