module.exports = (sequelize, Sequelize) => {
    const AddOnServices = sequelize.define("addOnServices", {
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
    return AddOnServices;
}