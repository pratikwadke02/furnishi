module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productCode: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        details: {
            type: Sequelize.STRING,
        }
    })
    return Product;
}