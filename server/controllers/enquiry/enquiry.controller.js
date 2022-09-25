const db = require("../../models");
const Enquiry = db.enquiry;

exports.create = async (req, res) => {
    try{
        var enquiryCode;
        // check if first enquiry
        await Enquiry.findAll().then(data => {
            if(data.length == 0){
                // first enquiry
                enquiryCode = 'E100500';
                console.log(enquiryCode);
            }else{
                // not first enquiry
                // get last enquiry code
                var lastEnquiryCode = data[data.length - 1].enquiryCode;
                // get last 3 digits
                var lastDigits = lastEnquiryCode.substring(1, 7);
                // increment by 1
                var incrementedDigits = parseInt(lastDigits, 10) + 1;
                // generate code as E100500
                enquiryCode = 'E' + incrementedDigits;
            }
        });
        console.log(enquiryCode);
                    // enquiry code does not exist
       // create enquiry
       await Enquiry.create({
            enquiryCode: enquiryCode,
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
            message: err.message || "Some error occurred while creating the Enquiry."
        });
    });
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Enquiry."
        });
    }
};


exports.findAll = (req, res) => {
    try{
        Enquiry.findAll().then(data => {
            res.send(data);
        });
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving enquiries."
        });
    }
}