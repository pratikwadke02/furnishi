module.exports = (sequelize, Sequelize) => {
    const WorkPartnerLongServices = sequelize.define("workPartnerLongServices", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        serviceType: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        availability: {
            type: Sequelize.STRING,
        },
        installationtype: {
            type: Sequelize.STRING,
        },
        installationArea : {
            type: Sequelize.INTEGER,
        },
        lightConnection: {
            type: Sequelize.INTEGER,
        },
        floatingShelf: {
            type: Sequelize.INTEGER,
        },
    })
    return WorkPartnerLongServices;
}