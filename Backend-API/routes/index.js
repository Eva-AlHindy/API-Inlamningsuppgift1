const express = require('express');
const router = express.Router();

const students = require('./students.js');

// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})
router.get("/students", students.getStudents);
router.get("/students/:_id", students.getStudentById);
router.post("/students", students.postStudent);
router.put("/students/:studentId", students.putStudent);
router.delete("/students/:_id", students.deleteStudent);

module.exports = router
