const db = require("../models");
const Order = db.order;

exports.create = (req, res) => {
    try{
        var orderCode;
        // check if first order
        Order.findAll().then(data => {
            if(data.length == 0){
                // first enquiry
                orderCode = 'O100500';
            }else{
                // not first enquiry
                // get last enquiry code
                var lastOrderCode = data[data.length - 1].orderCode;
                // get last 3 digits
                var lastDigits = lastOrderCode.substring(1, 6);
                // increment by 1
                var incrementedDigits = parseInt(lastDigits, 10) + 1;
                // generate code as E100500
                orderCode = 'O' + incrementedDigits;
            }
        });
        // order code does not exist
        // create order
        Order.create({
            orderCode: orderCode,
            clientName: req.body.clientName,
            clientCode: req.body.clientCode,
            clientProductCode: req.body.clientProductCode,
            serviceType: req.body.serviceType,
            faceArea: req.body.faceArea,
            floatingShelf: req.body.floatingShelf,
            spotLight: req.body.spotLight,
            stripLight: req.body.stripLight,
            expectedStartDate: req.body.expectedStartDate,
            expectedEndDate: req.body.expectedEndDate,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            breakStartTime: req.body.breakStartTime,
            breakEndTime: req.body.breakEndTime,
            siteCondition: req.body.siteCondition,
            productType: req.body.productType,
            workPhase: req.body.workPhase,
            workPhaseDetails: req.body.workPhaseDetails,
            locality: req.body.locality,
            pincode: req.body.pincode,
            quote: req.body.quote,
            status: req.body.status,
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Order."
        });
    });
    }

    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Order."
        });
    }
};

exports.findAll = (req, res) => {
    try{
        Order.findAll().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving orders."
            });
        });
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    }
};
