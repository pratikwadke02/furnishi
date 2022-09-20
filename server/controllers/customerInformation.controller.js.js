const db = require('../models');
const customerInformation = db.customerInformation;

exports.create = async (req, res) => {
    console.log(req.body);
    customerInformation.create(req.body).then(data => {
        res.send(
            {
                message: "Customer Information added",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    customerInformation.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}

exports.findOne = async (req, res) => {
    customerInformation.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}