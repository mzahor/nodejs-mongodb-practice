const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    email: String,
    age: Number,
    hobbies: {
      type: [],
      default: ["football", "basketball"],
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
