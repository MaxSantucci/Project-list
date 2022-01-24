// function camelize(str) {
//    return str
//       .split('-')
//       .map(
//          (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join('');
// }



// function filterRange(arr, a, b) {
//    return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtred = filterRange(arr, 1, 4);

// alert ( filtred );

// alert ( arr );



// function filterRangePlace(arr, a, b) {

//    for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
     
//          if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//          }
//    }
// }

// let arr = [5, 3, 8, 1];

// filterRangePlace(arr, 1, 4);

// alert ( arr );



// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );



// function copySorted(arr) {
//    return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );



// function Calculator() {

//    this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//    };

//    this.calculate = function(str) {

//       let split = str.split(' '),
//          a = +split[0],
//          op = split[1],
//          b = +split[2]

//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//          return NaN;
//       }

//       return this.methods[op](a, b);
//    }

//    this.addMethod = function(name, func) {
//       this.methods[name] = func;
//    };
// }



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//    fullName: `${user.name} ${user.surname}`,
//    id: user.id
// }));

// alert( usersMapped[0].id );
// alert( usersMapped[0].fullName );


// function sortByAge(arr) {
//    arr.sort((a,b) => a.age > b.age ? 1 : -1);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);



// function shuffle(array) {
//    array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// shuffle(arr);
// alert(arr);



// function shuffle(array) {
//    array.sort(() => Math.random() - 0.5);
//  }
 
//  // подсчёт вероятности для всех возможных вариантов
//  let count = {
//    '123': 0,
//    '132': 0,
//    '213': 0,
//    '231': 0,
//    '321': 0,
//    '312': 0
//  };
 
//  for (let i = 0; i < 1000000; i++) {
//    let array = [1, 2, 3];
//    shuffle(array);
//    count[array.join('')]++;
//  }
 
//  // показать количество всех возможных вариантов
//  for (let key in count) {
//    alert(`${key}: ${count[key]}`);
//  }



// function getAverageAge(users) {
//    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 40 };
// let masha = { name: "Маша", age: 18 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) );



// function unique(arr) {
//    let result = [];

//    for (let str of arr) {
//       if (!result.includes(str)) {
//          result.push(str)
//       }
//    }

//    return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) )



// function unique(arr) {
//    return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) );



function aclean(arr) {
   let map = new Map();

   for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join("");
      map.set(sorted, word);
   }

   return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );




// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// alert(keys);



// let messages = [
//    {text: "Hello", from: "John"},
//    {text: "How goes?", from: "John"},
//    {text: "See you soon", from: "Alice"}
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// readMessages.add(messages[0]);

// alert("Read message 0: " + readMessages.has(messages[0]));

// messages.shift();



let messages = [
   {text: "Hello", from: "John"},
   {text: "How goes?", from: "John"},
   {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));



// function sumSalaries(salaries) {

//    let sum = 0
//    for (let salary of Object.values(salaries)) {
//       sum += salary;
//    }

//    return sum;
// }

// let salaries = {
//    "John": 100,
//    "Pete": 300,
//    "Mary": 250
// };

// alert( sumSalaries(salaries) );



// let user = {
//    name: "John",
//    age: 30
// }

// alert( count(user) );

// function count(obj) {
//    return Object.keys(obj).length;
// }