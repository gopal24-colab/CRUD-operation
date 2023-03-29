const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const userRouter = require("./routers/user");
const authLogin = require("./routers/auth");

/**--------------------------------
 * Middleware section
 */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", userRouter);
app.use("/auth", authLogin);
app.use(express.static("views"));

/* -------------------------------- */

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error occured due to ${err}`);
  } else {
    console.log(`Server started on port http://localhost:${PORT}`);
  }
});
