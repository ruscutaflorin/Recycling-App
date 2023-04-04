module.exports = (sequelize, DataTypes) => {
  return sequelize.define("contest_details", {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trashType: DataTypes.STRING,
    trashQuantity: DataTypes.INTEGER,
    recycleCompany: DataTypes.STRING,
    data_emitere_bon: DataTypes.DATE,
    receipt: DataTypes.BLOB,
  });
};
