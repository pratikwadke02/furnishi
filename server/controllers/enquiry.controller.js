const db = require('../models');
const Enquiry = db.enquiry;

exports.create = async (req, res) => {
    console.log(req.body);
    Enquiry.create(req.body).then(data => {
        res.send(
            {
                message: "Messege Sent successfully",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    Enquiry.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}