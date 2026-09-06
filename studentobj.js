const student = {
  name: "Alice Smith",
  age: 20,
  grade: "A",
  course: "Computer Science",
  displayDetails() {
    return `Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}\nCourse: ${this.course}`;
  }
};

// --- Output ---
console.log(student.displayDetails());