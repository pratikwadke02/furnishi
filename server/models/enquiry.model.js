module.exports = (sequelize, Sequelize) => {
    const Enquiry = sequelize.define("enquiry", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.STRING,
    },
    });
    return Enquiry;
  };
  