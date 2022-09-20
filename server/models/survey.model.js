module.exports = (sequelize, Sequelize) => {
    const Survey = sequelize.define("survey", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      middleName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
          type: Sequelize.STRING,
      },
      mobileNumber: {
        type: Sequelize.STRING,
      },
      presentAddress: {
        type: Sequelize.STRING,
      },
      permanentAddress: {
        type: Sequelize.STRING,
      },
      workPlace: {
        type: Sequelize.STRING,
      },
    });
    return Survey;
  };
  