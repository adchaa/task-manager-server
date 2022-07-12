require("dotenv").config();
const config = {
  host: "fdb32.awardspace.net",
  user: "4137503_taskmanager",
  password: process.env.PASSWORD,
  database: "4137503_taskmanager",
};
module.exports = config;
