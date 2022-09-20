module.exports = (sequelize, Sequelize) => {
  const WorkPartnerAdmin = sequelize.define("workPartnerAdmin", {
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
    workExperience: {
      type: Sequelize.STRING,
    },
    knowledgeOfElectricalPoint: {
      type: Sequelize.STRING,
    },
    knowledgeOfPlumbingPoint: {
      type: Sequelize.STRING,
    },
    smartPhone: {
        type: Sequelize.STRING,

    },
    teamMembers: {
        type: Sequelize.STRING,
    },
    companyName: {
        type: Sequelize.STRING,
    },
    accountNumber: {
        type: Sequelize.STRING,
    },
    holderName: {
        type: Sequelize.STRING,
    },
    ifscCode: {
        type: Sequelize.STRING,
    },
    panNumber: {
        type: Sequelize.STRING,
    },
    gstNumber: {
        type: Sequelize.STRING,
    },
  });
  return WorkPartnerAdmin;
};
