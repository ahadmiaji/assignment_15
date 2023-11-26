const express = require("express");
const {
  CreateStudent,
  ReadStudents,
  DeleteStudent,
  UpdateStudent,
  ReadStudentByID,
} = require("../controller/StudentsController");

const router = express.Router();

//api routing endpoint:

router.post("/CreateStudent", CreateStudent);
router.get("/ReadStudents", ReadStudents);
router.get("/DeleteStudent/:id", DeleteStudent);
router.post("/UpdateStudent/:id", UpdateStudent);
router.get("/ReadStudentByID/:id", ReadStudentByID);

//router export
module.exports = router;
