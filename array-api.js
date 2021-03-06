'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(`>> Q1`);
    for(const fruit of fruits) {
        console.log(fruit);
    }
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(`>> Q2`);
    console.log(fruits.split(','));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(`>> Q3`);
    array.sort((a,b) => b -a); 
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    console.log(`>> Q4`);
    array.shift();
    array.shift();
    console.log(array)
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    //   for(const student of students) {
    //       if(student.score == 90) {
    //           console.log(`Q5. ${student}`)
    //       }
    //       console.log(student.find(a => a.score == 90));
    //   }
    console.log(`>> Q5`)
      console.log(students.find(a => a.score == 90));
  }
  
  // Q6. make an array of enrolled students
  {
      console.log(`>> Q6`);
      const array = [];
      for(const student of students) {
          if(student.enrolled == true) {
              array.push(student);
          }
      }
      console.log(array);
      
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      console.log(`>> Q7`);
      const array = [];
      for(const student of students) {
          array.push(student.score);
      }
      console.log(array);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.log(`>> Q8`);
      for(const student of students) {
          if(student.score < 50) {
              console.log(student)
          }
      }
  }
  
  // Q9. compute students' average score
  {
    console.log(`>> Q9`);
    let scoreSum = 0;
    let studentNum = 0;
    for(const student of students) {
        studentNum++;
        scoreSum += student.score;
    }
    const result = scoreSum / studentNum;
    console.log(result); 
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    console.log(`>> Q10`);
    let scores = [];
    for(const student of students) {
        scores.push(student.score);
    }
    console.log(scores);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    console.log(`>> Bonus`);
    let scores = [];
    for(const student of students) {
        scores.push(student.score);
    }
    console.log(scores.sort());
  }