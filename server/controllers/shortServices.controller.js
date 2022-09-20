const db = require('../models');
const shortServices = db.shortServices;

exports.update = async (req, res) => {
    console.log(req.body);
    shortServices.update(req.body, {
        where: {
            id: req.body.id,
            name: req.body.name
        }
    }).then(() => {
        res.send('Updated successfully!');
    }
    ).catch(err => {
        res.status(500).send("Error updating record: " + err);
    }
    );
}

exports.findAll = async (req, res) => {
    shortServices.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}

exports.create = async (req, res) => {
    console.log(req.body);
    shortServices.create(req.body).then(data => {
        res.send(data);
    }
    ).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}