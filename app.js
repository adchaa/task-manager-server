const port = process.env.PORT || 3050;
//imports
const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
//import routers
const log = require("./routers/login.js");
const task = require("./routers/task");
const signup = require("./routers/signup.js");
const logout = require("./routers/logout.js");
//core config
const optioncors = {
  origin: "https://adchaa.github.io",
  credentials: true,
};
app.use(cors(optioncors));
app.use(express.urlencoded({ extended: true }));
// session config
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(express.json());
app.get("/check", (req, res) => {
  if (req.session.user) {
    return res.status(200).json({
      username: req.session.user.username,
      message: "logged in",
    });
  } else {
    return res.status(200).json({
      message: "not logged in",
    });
  }
});
//routers uses
app.use("/login", log);
app.use("/task", task);
app.use("/signup", signup);
app.use("/logout", logout);
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "good",
  });
});
app.listen(port, () => {
  console.log("server started at port " + port);
});
