// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

// let students = ['John', 'Sara', 'Jack'];
// students.forEach(myFunction);
// function myFunction(item, index, arr) {
//     arr[index] = 'Hello ' + item;
// }
// console.log(students);


// const obj = {
//     prop: 42
//   };
//   Object.freeze(obj); 
//   obj.prop = 33;
//   console.log(obj.prop);


//   let Student = {
//     name: "Veena",
//     age: 23,
//     location: "Theni",
//     display() {
//       console.log("Name:", this.name);
//     }
//   };
//   let std1 = Object.create(Student);
//   std1.name = "Veenasen";
//   std1.display();
  


const person = {
    name1: "veenasen",
    age: 23
  };
  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }



// const number=['a','b','c','d'];
// for(const element of number){
//     console.log(element);
// }


// const iterable="vee";
// for(const element of iterable){
//     console.log(element);
// }