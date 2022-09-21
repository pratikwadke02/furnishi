const db = require('../../models');
const ArchtDesigr = db.archtDesigr;

exports.create = async (req, res) => {
    console.log(req.body);
    ArchtDesigr.create(req.body).then(data => {
        res.send(
            {
                message: "Architect, Designer and Cordinator added",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    ArchtDesigr.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}

