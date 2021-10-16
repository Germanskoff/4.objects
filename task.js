function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;

}

Student.prototype.addMark = function (mark) {
   if (this.marks === undefined) {
      this.marks = [];
   }
   this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
   if (this.marks === undefined) {
      this.marks = [];
   }

   for (let mark of marks) {
      this.marks.push(mark);
   }
}

Student.prototype.getAverage = function () {
   if (this.marks === undefined || this.marks.length === 0) {
      console.log("Error! Оценки не найдены")
      return 0;
   }
   let average = 0;
   for (let mark of this.marks) {
      average += mark;
   }
   return average / this.marks.length;
}

Student.prototype.excludeStudent = function (reason) {
   delete this.subject;
   delete this.marks;

   this.excluded = reason;
}


// ваш код для остальных методов