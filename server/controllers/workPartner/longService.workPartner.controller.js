const db = require('../../models');
const WorkPartnerLongServices = db.workPartnerLongServices;

exports.update = async (req, res) => {
    console.log(req.body);
    WorkPartnerLongServices.update(req.body, {
        where: {
            name: req.body.name
        }
    }).then(data => {
        res.send(
            {
                message: "Long Service Updated",
            }
        );
    }
    ).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    WorkPartnerLongServices.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}

exports.create = async (req, res) => {
    console.log(req.body);
    WorkPartnerLongServices.create(req.body).then(data => {
        res.send(
            {
                message: "Long Service Added",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}