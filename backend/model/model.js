const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const formSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      unique: true,
      required: true,
      uniqueCaseInsensitive: true, // Make the email case-insensitive
    },
    address: {
      type: String,
      unique: true,
      required: true,
    },
    parentnames: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

formSchema.plugin(uniqueValidator);

const Userdb = mongoose.model("Userdb", formSchema);
module.exports = Userdb;
