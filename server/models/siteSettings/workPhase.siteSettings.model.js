module.exports = (sequelize, Sequelize) => {
    const WorkPhase = sequelize.define("workPhase", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        phase: {
            type: Sequelize.STRING,
        },
    })
    return WorkPhase;
}