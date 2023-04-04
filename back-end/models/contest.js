module.exports = (sequelize, DataTypes) => {
  return sequelize.define("contest", {
    id_inscris: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fundingCompany: DataTypes.STRING,
    max_inscrisi: DataTypes.INTEGER,
    data_inceput: DataTypes.DATE,
    data_sfarsit: DataTypes.DATE,
    min_trash_quantity: DataTypes.INTEGER,
    receipt: DataTypes.BLOB,
  });
};
