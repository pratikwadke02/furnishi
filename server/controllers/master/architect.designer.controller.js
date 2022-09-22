const db = require('../../models');
const ArchtDesigr = db.archtDesigr;

exports.create = async (req, res) => {
    try{
        const archtDesigr = await ArchtDesigr.create(req.body);
        res.status(201).send(archtDesigr);
    }
    catch(error){
        res.status(500).send(error);
    }
}

exports.findAll = async (req, res) => {
    ArchtDesigr.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}

