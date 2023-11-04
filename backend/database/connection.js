const mongoose = require("mongoose");
const databaseUrl =
  //process.env.DATABASE_URL || "mongodb://localhost/argentBankDB";
  process.env.DATABASE_URL ||
  "mongodb+srv://gieltie:zelohOVK6kXUQ1EW@argentbank.semvo7h.mongodb.net/argentbank?retryWrites=true&w=majority";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
