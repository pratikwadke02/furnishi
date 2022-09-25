module.exports = (sequelize, Sequelize) => {
    const Enquiry = sequelize.define("enquiry", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      enquiryCode: {
        type: Sequelize.STRING,
      },
      clientName: {
        type: Sequelize.STRING,
      },
      clientCode: {
        type: Sequelize.STRING,
      },
      clientProductCode: {
        type: Sequelize.STRING,
      },
      serviceType: {
        type: Sequelize.STRING,
      },
      faceArea: {
        type: Sequelize.STRING,
      },
      floatingShelf: {
        type: Sequelize.STRING,
      },
      spotLight: {
        type: Sequelize.STRING,
      },
      stripLight: {
        type: Sequelize.STRING,
      },
      expectedStartDate: {
        type: Sequelize.STRING,
      },
      expectedEndDate: {
        type: Sequelize.STRING,
      },
      startTime: {
        type: Sequelize.STRING,
      },
      endTime: {
        type: Sequelize.STRING,
      },
      breakStartTime: {
        type: Sequelize.STRING,
      },
      breakEndTime: {
        type: Sequelize.STRING,
      },
      siteCondition: {
        type: Sequelize.STRING,
      },
      productType: {
        type: Sequelize.STRING,
      },
      workPhase: {
        type: Sequelize.STRING,
      },
      workPhaseDetails: {
        type: Sequelize.STRING,
      },
      locality: {
        type: Sequelize.STRING,
      },
      pincode: {
        type: Sequelize.STRING,
      },
      quote: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
    });
    return Enquiry;
  };
  