module.exports = (sequelize, DataTypes) => {
  return sequelize.define("orders", {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    trashType: DataTypes.STRING,
    trashQuantity: DataTypes.INTEGER,
    recycleCompany: DataTypes.STRING,
    trashImage: DataTypes.BLOB,
  });
};
