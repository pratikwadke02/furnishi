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
        projectManagerName: {
            type: Sequelize.STRING,
        },
        projectManagerContact: {
            type: Sequelize.STRING,
        },
        projectManagerEmail: {
            type: Sequelize.STRING,
        },
    })
    return Manager;
}