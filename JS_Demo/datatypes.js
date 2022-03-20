//Numbers
// let num1 = 10;
// console.log(typeof num1);
// let num2 = 5;

// console.log(num1 * num2);
// console.log(num2**2);

// num2 *= 5;

// console.log(num2);

// console.log(num2 / 'Hey');

//Strings
// let a1 = "Pratham";
// console.log(typeof a1);
// let b = 'K';
// console.log(a1 + ' ' + b);
// console.log(a1.length);
// console.log(a1[2]);
// console.log(a1.toUpperCase());
// console.log(a1.indexOf('t'));
// console.log(a1.includes('z'));

// //Template string
// //let ts = 'Hello ths is my first name ' + a1 + 'and my last name is ' + b;
// let ts = `Hello ths is my first name ${a1} an my last name is ${b}`;
// console.log(ts);

//Null and undefined

let age = null;
console.log(age, age + 3, `Age is ${age}`);

//Boolean
// let v1 = true;
// let v2 = 'true';

// console.log(typeof v1, typeof v2)

//Arrays

 let array1 = ['P', 'K', 'J', 'S'];

console.log(typeof array1);
console.log(array1[1]);
let arraytostring = array1.join(';');
console.log(arraytostring);
array1.push('A');
console.log(array1);
array1.pop();
console.log(array1);
array1.unshift('X', 'Y');
console.log(array1);
// array1.splice(2, 1);
// console.log(array1);
// let arr2 = ['A', 'B', 2, 5];
// console.log(arr2);