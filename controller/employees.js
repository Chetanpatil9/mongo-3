const model = require("../model/projectmodel");

const addData = async (req, res) => {
  const employeeData = req.body;
  const data = await model.insertMany(employeeData);
  console.log(data);
  return res.send(data);
};

const getData = async (req, res) => {
  const data = await model.find({});
  console.log(data);
  return res.send(data);
};
const getSalary = async (req, res) => {
  const data = await model.find({ salary: { $gt: "30000" } });
  console.log(data);
  return res.send(data);
};
const getExperience = async (req, res) => {
  const data = await model.find({ overallExp: { $gt: "2" } });
  console.log(data);
  return res.send(data);
};
const getGraduationyearAndExperience = async (req, res) => {
  const data = await model.find({
    yearGrad: { $gt: "2015" },
    overallExp: { $gt: "1" },
  });
  console.log(data);
  return res.send(data);
};
const salaryUpdate = async (req, res) => {
  const data = await model.updateMany(
    { salary: { $gt: "30000" } },
    { $set: { salary: "30000" } }
  );
  console.log(data);
  return res.send(data);
};
const deleteDocuments = async (req, res) => {
  const data = await model.deleteMany({ lastCompany: "Y" });
  console.log(data);
  return res.send(data);
};

module.exports = {
  addData,
  getData,
  getData,
  getSalary,
  getExperience,
  getGraduationyearAndExperience,
  salaryUpdate,
  deleteDocuments,
};
