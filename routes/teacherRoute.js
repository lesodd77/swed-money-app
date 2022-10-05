const express = require("express");
const router = express.Router();
const teacher = require("../models/teacherModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

// register new teacher

router.post("/register", async (req, res) => {
  try {
    const teacherExists = await teacher.findOne({
      teacherId: req.body.teacherId,
    });
    if (teacherExists) {
      return res.status(200).send({
        message: "teacher already exists",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newteacher = new teacher(req.body);
    await newteacher.save();
    res.status(200).send({
      message: "Registration successful , Please wait for admin approval",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      succes: false,
    });
  }
});

// login teacher
router.post("/login", async (req, res) => {
  try {
    const teacher = await teacher.findOne({
      teacherId: req.body.teacherId,
    });
    if (!teacher) {
      return res.status(200).send({
        message: "teacher not found",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, teacher.password);
    if (!isMatch) {
      return res.status(200).send({
        message: "Invalid password",
        success: false,
      });
    }
    if (teacher.isApproved === false) {
      return res.status(200).send({
        message: "Your account is not approved yet",
        success: false,
      });
    }

    const token = jwt.sign(
      { teacherId: teacher._id },
      process.env.jwt_secret,
      { expiresIn: "24h" }
    );
    res.status(200).send({
      message: "Login successful",
      success: true,
      data: token,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});

// get teacher by id

router.post("/get-teacher-by-id", authMiddleware, async (req, res) => {
  try {
    console.log(req.body);
    const teacher = await teacher.findOne({
      _id: req.body.teacherId,
    });
    if (!teacher) {
      return res.status(200).send({
        message: "teacher not found",
        success: false,
      });
    }
    teacher.password = undefined;
    res.status(200).send({
      message: "teacher found",
      success: true,
      data: teacher,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
}),


  (module.exports = router);
