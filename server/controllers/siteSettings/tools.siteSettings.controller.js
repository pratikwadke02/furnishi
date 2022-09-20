const db = require('../../models');
const toolsSiteSettings = db.toolsSiteSettings;

exports.create = async (req, res) => {
    console.log(req.body);
    toolsSiteSettings.create(req.body).then(data => {
        res.send(
            {
                message: "Tool Added",
            }
        );
    }
    ).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}

exports.findAll = async (req, res) => {
    toolsSiteSettings.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}

exports.update = async (req, res) => {
    console.log(req.body);
    toolsSiteSettings.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(
            {
                message: "Tool Updated",
            }
        );
    }
    ).catch(err => {
        res.send(err);
        console.log(err);
    });
}
