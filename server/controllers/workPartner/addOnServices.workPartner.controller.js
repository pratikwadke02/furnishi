const db = require('../../models');
const WorkPartnerAddOnServices = db.workPartnerAddOnServices;

exports.update = async (req, res) => {
    console.log(req.body);
    WorkPartnerAddOnServices.update(req.body, {
        where: {
            name: req.body.name
        }
    }).then(data => {
        res.send(
            {
                message: "Add On Services Updated",
            }
        );
    }
    ).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    WorkPartnerAddOnServices.findAll().then(data => {
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
    WorkPartnerAddOnServices.create(req.body).then(data => {
        res.send(
            {
                message: "Add On Services Added",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}