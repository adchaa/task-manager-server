require("dotenv").config();
const config = {
  host: "mysql-82566-0.cloudclusters.net",
  user: "admin",
  password: process.env.PASSWORD,
  database: "task-manager",
  port: 10356
};
module.exports = config;
