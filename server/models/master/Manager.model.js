module.exports = (sequelize, Sequelize) => {
    const Manager = sequelize.define("manager", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        projectName: {
            type: Sequelize.STRING,
        },
        managerName: {
            type: Sequelize.STRING,
        },
        managerContact: {
            type: Sequelize.STRING,
        },
        managerEmail: {
            type: Sequelize.STRING,
        },
    })
    return Manager;
}