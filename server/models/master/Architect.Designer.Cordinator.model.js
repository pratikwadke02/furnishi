module.exports = (sequelize, Sequelize) => {
    const ArchtDesigrCord = sequelize.define("archtDesigrCord", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        projectName: {
            type: Sequelize.STRING,
        },
        projectCordinatorName: {
            type: Sequelize.STRING,
        },
        projectCordinatorContact: {
            type: Sequelize.STRING,
        },
        projectCordinatorEmail: {
            type: Sequelize.STRING,
        },
    })
    return ArchtDesigrCord;
}