const db = require('../models');
const longServices = db.longServices;

exports.update = async (req, res) => {
    console.log(req.body);
    longServices.update(req.body, {
        where: {
            id: req.body.id,
            name: req.body.name,
            installationtype: req.body.installationtype,
        }
    }).then(data => {
        console.log(data);
        res.send(data);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}

exports.findAll = async (req, res) => {
    longServices.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}


exports.create = async (req, res) => {
    console.log(req.body);
    longServices.create(req.body).then(data => {
        res.send(data);
    }
    ).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}