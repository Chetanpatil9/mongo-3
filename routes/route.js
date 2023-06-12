const route = require("express").Router()
const { addData, getData, getSalary, getExperience, getGraduationyearAndExperience, salaryUpdate, deleteDocuments } = require("../controller/employees")

route.post("/addData", addData)
route.get("/getData", getData)
route.get("/getSalary", getSalary)
route.get("/getExperience", getExperience)
route.get("/getGraduationyearAndExperience", getGraduationyearAndExperience)
route.put("/salaryUpdate", salaryUpdate)
route.delete("/deleteDocuments", deleteDocuments)

module.exports = route