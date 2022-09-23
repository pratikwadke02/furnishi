module.exports = (sequelize, Sequelize) => {
    const ArchtDesigr = sequelize.define("archtDesigr", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        firmName: {
            type: Sequelize.STRING,
        },
        firmAddress: {
            type: Sequelize.STRING,
        },
        emailId: {
            type: Sequelize.STRING,
        },
        contactOne: {
            type: Sequelize.STRING,
        },
        contactTwo: {
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
        projectName: {
            type: Sequelize.STRING,
        },
    })
    return ArchtDesigr;
}