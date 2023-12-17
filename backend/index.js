const express = require("express");
const connectToMongoDB = require("./db");
const apiRouter = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();
connectToMongoDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", apiRouter);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
