const db = require('../../models');
const WorkPartnerShortServices = db.workPartnerShortServices;

exports.update = async (req, res) => {
    console.log(req.body);
    WorkPartnerShortServices.update(req.body, {
        where: {
            name: req.body.name
        }
    }).then(data => {
        res.send(
            {
                message: "Short Service Updated",
            }
        );
    }
    ).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    WorkPartnerShortServices.findAll().then(data => {
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
    WorkPartnerShortServices.create(req.body).then(data => {
        res.send(
            {
                message: "Short Service Added",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}
