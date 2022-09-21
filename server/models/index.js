const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customerInformation = require('./customerInformation.model.js')(sequelize, Sequelize);
db.survey = require('./survey.model.js')(sequelize, Sequelize);
db.workPartner = require('./workPartner.model.js')(sequelize, Sequelize);
db.customerRegistration = require('./customerRegistration.model.js')(sequelize, Sequelize);
db.workPartnerAdmin = require('./workPartnerAdmin.model.js')(sequelize, Sequelize);
// db.tools = require('./tools.model.js')(sequelize, Sequelize);
db.aadharImage = require('./aadhar.model.js')(sequelize, Sequelize);
// db.workPartnerAdmin.belongsTo(db.tools);
// db.tools.hasMany(db.workPartnerAdmin);
db.workPartnerAdmin.belongsTo(db.aadharImage);
db.aadharImage.hasMany(db.workPartnerAdmin);
db.archtDesigr = require('./master/Architect.Designer.model.js')(sequelize, Sequelize);
db.manager = require('./master/Manager.model.js')(sequelize, Sequelize);
db.archtDesigrCord = require('./master/Architect.Designer.Cordinator.model.js')(sequelize, Sequelize);

db.addOnServices = require('./addOnServices.model.js')(sequelize, Sequelize);
db.longServices = require('./longServices.model.js')(sequelize, Sequelize);
db.shortServices = require('./shortServices.model.js')(sequelize, Sequelize);

db.workPartnerAddOnServices = require('./workPartner/addOnService.workPartner.model')(sequelize, Sequelize);
db.workPartnerLongServices = require('./workPartner/longService.workPartner.model')(sequelize, Sequelize);
db.workPartnerShortServices = require('./workPartner/shortService.workPartner.model')(sequelize, Sequelize);

db.toolsSiteSettings = require('./siteSettings/tools.siteSettings.model')(sequelize, Sequelize);
db.workPhaseSiteSettings = require('./siteSettings/workPhase.siteSettings.model')(sequelize, Sequelize);


module.exports = db;