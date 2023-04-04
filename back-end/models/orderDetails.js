module.exports = (sequelize, DataTypes) => {
  return sequelize.define("orderDetails", {
    invoiceNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city: DataTypes.STRING,
    address: DataTypes.STRING,
  });
};
