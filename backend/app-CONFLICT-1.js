const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const timestamp = require("express-timestamp")
const port = 3000
const app = express()
const School = require("./School")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(timestamp.init)

app.listen(port, () => {
    console.log("Grading on port ", port)
  })

  // * @return {Student[]} Array of Student objects

  let theSchool = new School()
  theSchool.addClass("Math", "Professor Pie")
  theSchool.addClass("Science", "Professor Atom")
  theSchool.addClass("Spanish", "Professor Maestra")
  theSchool.addClass("History", "Professor Franklin")
  theSchool.enrollStudent("History",{name:"Manny",age:16,city:"Bronx",grade:55})
  theSchool.enrollStudent("History",{name:"Emma",age:14,city:"Queens",grade:70})
  theSchool.enrollStudent("Spanish",{name:"Max",age:16,city:"Brooklyn",grade:90})
  theSchool.enrollStudent("Spanish",{name:"Charlie",age:15,city:"Manhattan",grade:55})
  theSchool.enrollStudent("Science",{name:"Dave",age:14,city:"bronx",grade:55})
  theSchool.enrollStudent("Science",{name:"Sarah",age:18,city:"Bronx",grade:65})
  theSchool.enrollStudent("Math",{name:"Lyn",age:17,city:"Manhattan",grade:55})
  theSchool.enrollStudent("Math",{name:"Carla",age:15,city:"Bronx",grade:80})
  // theSchool.getStudentsByClass([className]["students"])
// console.log(theSchool.classes)
// console.log(theSchool)
// console.log(theSchool.classes["Math"]["students"])
// console.log(theSchool.getStudentsByClass("Math"))
// console.log(theSchool.getStudentsByClassWithFilter("Math", true))


// theSchool.classes[className]["students"]


// app.get("/school",(req,res)=>{
//   let moment = req.timestamp
//   try {
//     let info = theSchool
//     res.json({
//     payload: info,
//     status: "success",
//     message: "Retrieved Students",
//     moment
//   })
//   } catch (error) {
//     console.log(error)
//   }
// }) 

// app.get("/class",(req,res)=>{
//   let moment = req.timestamp
//   try {
//     let info = theSchool.classes
//     res.json({
//     payload: info,
//     status: "success",
//     message: "Retrieved Students",
//     moment
//   })
//   } catch (error) {
//     console.log(error)
//   }
// }) 

// app.get("/:className/students",(req,res)=>{
//   let moment = req.timestamp
//   let {className} = req.params
//   try {
//     let info = theSchool.getStudentsByClass(className)
//     res.json({
//     payload: info,
//     status: "success",
//     message: "Retrieved Students",
//     moment
//   })
//   } catch (error) {
//     console.log(error)
//   }
// })
