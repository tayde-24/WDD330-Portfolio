/*This JavaScript is a bit of a mess, but all of these console tests were to 
 *to see these play out infront of me for my visual learning for the most part*/

const a = "Alexa";
//let a = name;
console.log(a);
console.log(a.length);
//a.value = "James";

console.log(a['length']);
a.toUpperCase();
console.log(a.toUpperCase());

console.log(a.charAt(2)); //Position of letter 'e'
console.log(a.indexOf('A'));
console.log(a.indexOf('J'));
console.log(a.includes('a')); //Indicates if a string has a certain character
console.log(a.startsWith('B')); //Sees if it starts with the character
console.log("Hello".concat(" ","World", "!")); //Concat method

a["length"];
console.log(a);

const c = {value: 1};
console.log(c);
c.value = 3;

console.log(c);
console.log(c);


console.log("Hello" + " " + "How" + " " + "Are" + " " + "You?");
console.log( "               Hello how art thou, my son?  "); //Without trim
console.log( "               Hello how art thou, my son?  ".trim()); //With trim method
console.log("hello".repeat(4));

const uniqueID = Symbol("this is a unique ID");
typeof uniqueID;
console.log(typeof uniqueID);
console.log(uniqueID);

console.log(typeof 433);
console.log(Number.isInteger(433)); //Whole number, so true
console.log(Number.isInteger(433.45)); //Decimal or float, which is false
console.log(new Number(56));
console.log(1e6);
console.log(2e4);
console.log(2.5e-4);

const PI = 3.1415926;
console.log(PI);

console.log(PI.toFixed(2)); //Fixed in to two decimal places

console.log(325678..toPrecision(2)); //Rounds it up on the 10,000th


console.log(2.459.toPrecision(2));

let points = 0; //Initializes points to zero
points = points + 10; // Adds 10 to points
console.log(points);

points += 10; //Short hand to add to the points
console.log(points);

points -= 5; //Subtract shorthand
console.log(points);

points *= 2;  //Multiply shorthand
console.log(points);

points /= 3   //Division shorthand
console.log(points);

points %= 7;  //Remainder shorthand
console.log(points);

const question = "What is Superman's real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);