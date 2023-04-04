module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  });
};
