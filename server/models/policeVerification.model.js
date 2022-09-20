module.exports = (sequelize, Sequelize) => {
    const PoliceVerfication = sequelize.define("policeVerification", {
        policeVerificationImage: {
            type: Sequelize.STRING,
        },
    })
    return PoliceVerfication;
}