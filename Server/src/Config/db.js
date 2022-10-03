const mongoose = require("mongoose");

const contectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Daihana:daihana123@cluster0.2gyjfbq.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conect DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

contectDB();

module.exports = contectDB;
