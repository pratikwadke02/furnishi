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
        cordinatorName: {
            type: Sequelize.STRING,
        },
        cordinatorContact: {
            type: Sequelize.STRING,
        },
        cordinatorEmail: {
            type: Sequelize.STRING,
        },
    })
    return ArchtDesigrCord;
}