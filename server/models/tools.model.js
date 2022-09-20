module.exports = (sequelize, Sequelize) => {
    const Tools = sequelize.define("tools", {
        name: {
            type: Sequelize.STRING,
        },
    })
    return Tools;
}