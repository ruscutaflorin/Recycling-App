const Sequelize = require(`sequelize`);

const sequelize = new Sequelize("hackaton", "root", "admin", {
  dialect: `mysql`,
  host: `localhost`,
  define: {
    timestamps: false,
    // elimina coloanele createdAt si updatedAt
  },
});

module.exports = sequelize;
