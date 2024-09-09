const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://gedamsahil001:Xgw0LL3zJ8fEuMp4@cluster0.zk0cd.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  id: Number,
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

app.post("admin/signup", async (req, res) => {
  const username = req.body.username;
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};

app.listen(3000);
