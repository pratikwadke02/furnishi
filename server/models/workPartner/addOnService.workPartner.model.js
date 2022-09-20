module.exports = (sequelize, Sequelize) => {
    const WorkPartnerAddOnServices = sequelize.define("workPartnerAddOnServices", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        rates:{
            type: Sequelize.STRING,
        },
        note : {
            type: Sequelize.STRING,
        }
    })
    return WorkPartnerAddOnServices;
}