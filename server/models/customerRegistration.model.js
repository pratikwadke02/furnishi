module.exports = (sequelize, Sequelize) => {
    const CustomerRegistration = sequelize.define("customerRegistration", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      companyName: {
        type: Sequelize.STRING,
      },
      gstNumber: {
        type: Sequelize.STRING,
      },
      billingAddress: {
        type: Sequelize.STRING,
      },
      officeAddress: {
        type: Sequelize.STRING,
      },
      officePersonName: {
        type: Sequelize.STRING,
      },
      officePersonMailId: {
        type: Sequelize.STRING,
      },
      officePersonNumber: {
        type: Sequelize.STRING,
      },
      accountCordName: {
        type: Sequelize.STRING,
      },
      accountCordMailId: {
        type: Sequelize.STRING,
      },
      accountCordNumber: {
        type: Sequelize.STRING,
      },
      orderCordName: {
        type: Sequelize.STRING,
      },
      orderCordMailId: {
        type: Sequelize.STRING,
      },
      orderCordNumber: {
        type: Sequelize.STRING,
      },
      companyWebsite: {
        type: Sequelize.STRING,
      },
      products: {
        type: Sequelize.STRING,
      },
      companyType: {
        type: Sequelize.STRING, 
      }
    });
    return CustomerRegistration;
  };
  