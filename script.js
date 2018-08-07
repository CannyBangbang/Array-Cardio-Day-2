// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const someAdult = people.some(person => 2018 - person.year >= 19);
console.log("some answer:", someAdult);

//other version that pulls current year
const someAdult2 = people.some(person => {
  const thisYear = (new Date().getFullYear());
  return thisYear - person.year >= 19;
});
console.log("some answer:", someAdult2);
// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(person => 2018 - person.year >= 19);
console.log("all answer:", allAdult);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const finder = comments.find(comment => comment.id === 823423);
console.log("find:", finder);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const indexFinder = comments.findIndex(comment => comment.id === 823423);
const newComments = [
  ...comments.slice(0, indexFinder),
  ...comments.slice(indexFinder + 1)
];
console.log("indexFind:", indexFinder);
console.log("indexFindDeleted:", newComments);