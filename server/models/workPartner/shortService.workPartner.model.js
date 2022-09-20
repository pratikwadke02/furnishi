module.exports = (sequelize, Sequelize) => {
    const WorkPartnerShortServices = sequelize.define("workPartnerShortServices", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        delhi: {
            type: Sequelize.INTEGER,
        },
        availableCities: {
            type: Sequelize.INTEGER,
        },
        notAvailableCities: {
            type: Sequelize.INTEGER,
        }, 
        food: {
            type: Sequelize.INTEGER,
        },
        localFair: {
            type: Sequelize.INTEGER,
        }
    })
    return WorkPartnerShortServices;
}