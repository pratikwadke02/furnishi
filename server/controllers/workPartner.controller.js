const db = require('../models');
const workPartner = db.workPartner;

exports.create = async (req, res) => {
    console.log(req.body);
    workPartner.create(req.body).then(data => {
        res.send(
            {
                message: "Work Partner Information added",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    workPartner.findAll().then(data => {
        // console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    workPartner.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}
