const db = require('../../models');
const ArchtDesigrCord = db.archtDesigrCord;

exports.create = async (req, res) => {
    console.log(req.body);
    ArchtDesigrCord.create(req.body).then(data => {
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
    ArchtDesigrCord.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}