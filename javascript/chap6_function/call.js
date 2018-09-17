const bruce = {
  name: "Bruce"
};
const madeline = {
  name: "Madeline"
};


function greet() {
  return `Hello, I'm ${this.name}!`;
}
console.log(greet());
console.log(greet.call(bruce));

console.log('--------------------------------------------------------');

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}



update.call(bruce, 1949, 'singer');
console.log(bruce);

update.call(madeline, 1942, 'actress');
console.log(madeline);
console.log('-------------------------------------------------------');


update.apply(bruce, [1955, "actor"]);
console.log(bruce);


const arr = [2, 3, -5, 15, 7]; // -5 Math.max.apply(null, arr);
Math.min.apply(null, arr); // 15

console.log(Math.min(null, arr)); // 15
console.log(Math.min(2, 3, -5, 15, 7));
console.log(Math.min.apply(null, arr)); // -5
console.log(Math.min.apply(null, arr)); // 15

// -5 Math.max.apply(null, arr);    // 15


// bruce is now { name: "Bruce", birthYear: 1955,   //    occupation: "actor" } update.apply(madeline, [1918, "writer"]);   // madeline is now { name: "Madeline", birthYear: 1918,   //    occupation: "writer" }


// bruce is now { name: "Bruce", birthYear: 1949,
//    occupation: "singer" } update.call(madeline, 1942, 'actress');
//    // madeline is now { name: "Madeline", birthYear: 1942,
//     //    occupation: "actress" }
