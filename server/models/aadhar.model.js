module.exports = (sequelize, Sequelize) => {
    const   Aadhar = sequelize.define("aadhar", {
        aadharImage: {
            type: Sequelize.STRING,
        },
    })
    return  Aadhar;
}