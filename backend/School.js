const Class = require('./Class');
const Student = require('./Student')

class School {
  constructor() {
    this.classes = {
      // className: Class Object
      //   physics: {} 
    }
  }
  /**
   * Add class to classes
   * 
   * @param {string} name - Name of the class done
   * @param {string} teacher - Name of instructor  deon
   * @return {Class} Class object deon
   */
  addClass(name, teacher) {
    let newClass = new Class(name, teacher);
    this.classes[name] = newClass;
    return newClass
  }

  /**
   * Enroll student in class
   * 
   * @param {string} className - Name of the class 
   * @param {Student} student - Student object
   * @return {Student} Enrolled student
   */
  enrollStudent(className, student) {
    let newStudent = new Student(student.name,student.age,student.city,student.grade)
    this.classes[className]["students"].push(newStudent)
    return newStudent
  }




  /**
   * Get all students enrolled in a class
   * 
   * @param {string} className - Name of the class
   * @return {Student[]} Array of Student objects
   */
  getStudentsByClass(className) {
    return this.classes[className]["students"]
  }




  /**
   * Get all students and apply filters. If failing = true
   * return all students that are failing the class, 
   * that is all students whose grade is less than 70.
   * If a city is passed return students whose city match
   * the city passed. If both failing and city are passed
   * return students that are failing and that live in the
   * specified city
   * 
   * @param {string} className - Name of the class
   * @param {boolean} failing - Whether to return students that are failing the class or not
   * @param {string} city - Name of the city to match against students optional
   * @return {Student[]} Array of Student objects
   */
  getStudentsByClassWithFilter(className, failing) {
   let allStudents = this.classes[className][students]
   if(failing=== true){
     students.filter((student)=>{
       return student.grade <=65
     })
   } else {
    return allStudents
  }
  }

}

module.exports = School;
