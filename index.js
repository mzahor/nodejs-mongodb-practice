const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database!");
  })
  .catch((e) => {
    console.error("Failed to connect", e.message);
    process.exit(1);
  });

app.listen(process.env.port, () => {
  console.log(`Server is running at port ${process.env.port}`);
});
