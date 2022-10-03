const express = require("express");
const app = express();
const cors = require("cors");
require("./src/config/db");


app.use(cors());
app.use(express.json());


const userRouter = require("./src/Routes/user.routes");

app.use("/user", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});