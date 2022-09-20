module.exports = (sequelize, Sequelize) => {
    const LongServices = sequelize.define("longServices", {
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
        installableArea : {
            type: Sequelize.INTEGER,
        },
        lightConnection: {
            type: Sequelize.INTEGER,
        },
        floatingShelf: {
            type: Sequelize.INTEGER,
        },
    })
    return LongServices;
}