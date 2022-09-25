module.exports = (app) => {
    const user = require('../controllers/user.controller.js');
    const customerInformation = require('../controllers/customerInformation.controller.js');
    const survey = require('../controllers/survey.controller.js');
    const workPartner = require('../controllers/workPartner.controller.js');
    const customerRegistration = require('../controllers/customerRegistration.controller.js');
    const aadharImg = require('../controllers/aadharImg.controller.js');

    const addOnServices = require('../controllers/addOnServices.controller.js');
    const longServices = require('../controllers/longServices.controller.js');
    const shortServices = require('../controllers/shortServices.controller.js');

    const workPartnerAddOnServices = require('../controllers/workPartner/addOnServices.workPartner.controller.js');
    const workPartnerLongServices = require('../controllers/workPartner/longService.workPartner.controller');
    const workPartnerShortServices = require('../controllers/workPartner/shortService.workPartner.controller');

    const archtDesigr = require('../controllers/master/Architect.Designer.controller.js');
    const manager = require('../controllers/master/Manager.controller.js');
    const archtDesigrCord = require('../controllers/master/Architect.Designer.Cordinator.controller.js');

    const product = require('../controllers/master/product.controller.js');


    const toolsSiteSettings = require('../controllers/siteSettings/tools.siteSettings.controller.js');
    const workPhaseSiteSettings = require('../controllers/siteSettings/workPhase.siteSettings.controller.js');

    const enquiry = require('../controllers/enquiry/enquiry.controller.js');
    const order = require('../controllers/order/order.controller.js');


    const router = require('express').Router();

    router.post("/register", user.register);
    router.post("/login", user.login);
    router.get("/getAllUsers", user.findAll);
    router.post("/updatePassword", user.updatePassword);

    router.post("/addCustomerInfo", customerInformation.create);
    router.get("/getCustomerInfo", customerInformation.findAll);

    router.post("/addCustomerReg", customerRegistration.create);
    router.get("/getCustomerReg", customerRegistration.findAll);

    router.post("/addSurvey", survey.create);
    router.get("/getSurvey", survey.findAll);
    router.get("/getSurveyById/:id", survey.findOne);

    router.post("/addWorkPartner", workPartner.create);
    router.get("/getWorkPartner", workPartner.findAll);
    router.get("/getWorkPartnerById/:id", workPartner.findOne);

    router.post("/addImage", aadharImg.create);

    router.post("/addAddOnServices", addOnServices.create);
    router.get("/getAddOnServices", addOnServices.findAll);
    router.put("/updateAddOnServices", addOnServices.update);

    router.post("/addLongServices", longServices.create);
    router.get("/getLongServices", longServices.findAll);
    router.put("/updateLongServices", longServices.update);

    router.post("/addShortServices", shortServices.create);
    router.get("/getShortServices", shortServices.findAll);
    router.put("/updateShortServices", shortServices.update);

    router.post("/addWorkPartnerAddOnServices", workPartnerAddOnServices.create);
    router.get("/getWorkPartnerAddOnServices", workPartnerAddOnServices.findAll);
    router.put("/updateWorkPartnerAddOnServices", workPartnerAddOnServices.update);

    router.post("/addWorkPartnerLongServices", workPartnerLongServices.create);
    router.get("/getWorkPartnerLongServices", workPartnerLongServices.findAll);
    router.put("/updateWorkPartnerLongServices", workPartnerLongServices.update);

    router.post("/addWorkPartnerShortServices", workPartnerShortServices.create);
    router.get("/getWorkPartnerShortServices", workPartnerShortServices.findAll);
    router.put("/updateWorkPartnerShortServices", workPartnerShortServices.update);

    router.post("/addToolsSiteSettings", toolsSiteSettings.create);
    router.get("/getToolsSiteSettings", toolsSiteSettings.findAll);
    router.put("/updateToolsSiteSettings", toolsSiteSettings.update);

    router.post("/addWorkPhaseSiteSettings", workPhaseSiteSettings.create);
    router.get("/getWorkPhaseSiteSettings", workPhaseSiteSettings.findAll);
    router.put("/updateWorkPhaseSiteSettings", workPhaseSiteSettings.update);

    router.post("/addArchtDesigr", archtDesigr.create);
    router.get("/getArchtDesigr", archtDesigr.findAll);

    router.post("/addManager", manager.create);
    router.get("/getManagers", manager.findAll);

    router.post("/addArchtDesigrCord", archtDesigrCord.create);
    router.get("/getArchtDesigrCord", archtDesigrCord.findAll);

    router.post("/addProduct", product.create);
    router.get("/getProducts", product.findAll);
    
    router.post("/addEnquiry", enquiry.create);
    router.get("/getEnquiries", enquiry.findAll);

    router.post("/addOrder", order.create);
    router.get("/getOrders", order.findAll);

    app.use("/api/wsb", router);
}