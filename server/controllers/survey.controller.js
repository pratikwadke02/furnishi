const db = require('../models');
const Survey = db.survey;

exports.create = async (req, res) => {
    console.log(req.body);
    Survey.create(req.body).then(data => {
        res.send(
            {
                message: "Survey added successfully",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    Survey.findAll().then(data => {
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
    Survey.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}
