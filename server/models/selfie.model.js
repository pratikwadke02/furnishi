module.exports = (sequelize, Sequelize) => {
    const Selfie = sequelize.define("selfie", {
        selfieImage: {
            type: Sequelize.STRING,
        },
    })
    return Selfie;
}