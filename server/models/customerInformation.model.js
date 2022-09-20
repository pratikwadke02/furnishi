module.exports = (sequelize, Sequelize) => {
    const CustomerInformation = sequelize.define("customerInformation", {
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
      mobileNumber: {
        type: Sequelize.STRING,
      },
      companyName: {
        type: Sequelize.STRING,
      },
      designation: {
        type: Sequelize.STRING,
      },
      companyRole: {
        type: Sequelize.STRING,
      }
    });
    return CustomerInformation;
  };
  