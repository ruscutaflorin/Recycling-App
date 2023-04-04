const Sequelize = require("sequelize");
const db = require("../config/db");
const UsersModel = require("./users");
const OrdersModel = require("./orders");
const OrderDetailsModel = require("./orderDetails");

const users = UsersModel(db, Sequelize);
const orders = OrdersModel(db, Sequelize);
const ordersDetails = OrderDetailsModel(db, Sequelize);

users.belongsToMany(orders, { through: ordersDetails, foreignKey: "user_id" });
orders.belongsToMany(users, { through: ordersDetails, foreignKey: "order_id" });

module.exports = {
  users,
  orders,
  ordersDetails,
  connection: db,
};
