const StudentsModel = require("../model/StudentsModel");

exports.CreateStudent = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await StudentsModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};

exports.ReadStudents = async (req, res) => {
  try {
    let result = await StudentsModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};

exports.DeleteStudent = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let result = await StudentsModel.deleteOne(query);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};

exports.UpdateStudent = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;
    let result = await StudentsModel.updateOne(query, reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};

exports.ReadStudentByID = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let result = await StudentsModel.findOne(query);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};
