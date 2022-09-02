const express = require("express");
const Student = require("../models/Students");
const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new student 
    let student = new Student ({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save student user
    await student.save();
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let student = await Student.find();
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find student  by id
    let student = await Student.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(student.cloudinary_id);
    // Delete student user from db
    await student.remove();
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let student  = await Student.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(student.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      
  name: req.body.name,
  gender: req.body.gender,
  birthDay: req.body.birthDay,
  street: req.body.street,
  health: req.body.health,
  tel: req.body. tel,
  image: req.body.image,
  avatar: result.secure_url,
  cloudinary_i: result.public_id,
    };
    student = await Student.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find student  by id
    let student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;