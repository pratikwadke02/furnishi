const db = require('../../models');
const Manager = db.manager;

exports.create = async (req, res) => {
    try{
        const manager = await Manager.create(req.body);
        res.status(201).send(manager);
    }
    catch(error){
        res.status(500).send(error);
    }
}

exports.findAll = async (req, res) => {
    Manager.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}
