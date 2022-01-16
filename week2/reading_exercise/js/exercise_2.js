const heroes = []; //Setting up and array, or an object

heroes[0] = "Superman"; //First value being set in the array
heroes[1] = "Wonder Woman";
heroes[2] = "Flash";
heroes[5] = "Aquaman"; // Can use index notation to add new items to any position in this array
// heroes[3] = "Batman";
let text= "";
for (i=0; i < heroes.length; i++) {
    text += heroes[i] + "<br>";
    document.getElementById("demo").innerHTML= text;
}

const avengers = ["Captain America", "Iron Man", "Thor", "Hulk"]; //Sets up the heros in this array in one line
const mixedArray = [null, 1, [], "two", true]; // Array can contain a variety of different types as well as an empty array object
delete avengers[3]; //Though Hulk is deleted, the space is still occupied with the value of "undefined"


const[x,y] = [1,2]; //Example of destructuring an area, presenting them as individual values
console.log(x);
console.log(y);

let avengerss = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];

console.log(avengerss.length);
console.log(avengerss[avengerss.length - 1]);

avengerss.length = 8; //Can make array long
console.log(avengerss); //Adds undefined values at the end of the array
avengerss.length = 3; //Can make array short
console.log(avengerss);

avengerss.pop(); //Returns last item of arrat, but the array no longer contains that item
console.log(avengerss);

avengerss.shift(); //Like pop method, but it gets rid of the first item
console.log(avengerss);

avengerss.push("Thor"); //This method adds item at the end
console.log(avengerss.length);
console.log(avengerss);

avengerss.unshift("Captain America");
console.log(avengerss.length);
console.log(avengerss);

avengerss.concat(["Hulk", "Hawkeye", "Blackwidow"]); //Merges array
console.log(avengerss); //Notice that it does not change the array

// avengerss = avengerss.concat(["Hulk", "Hawkeye", "Blackwidow"]);
// console.log(avengerss); 

avengerss = [...avengerss, ...["Hulk", "Hawkeye", "Blackwidow"] ]; //Example of spread operator
console.log(avengerss);

console.log(avengerss.join(" & "));

const age = 12;
if (age < 18) {
console.log('Sorry, you are not old enough to play this game');
}

let bottles = 10;
while (bottles > 0){
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
}

const romanNumerals = new Map();
romanNumerals.set(1, "I");
console.log(romanNumerals);

const romanNumerals2 = new Map([[1, "I"], [2, "II"], [3, "III"], [4, "IV"], [5,"V"]]);
romanNumerals2.size;
console.log("romanNumerals2 map has " + romanNumerals2.size + " key and value pairs.");
console.log(romanNumerals2.has(5)); //checks to see if a particular key is in the map
for (let value of romanNumerals2.values()) {
    console.log(value);
}
for (let [key, value] of romanNumerals2.entries()) {
    console.log(key + " = " + value);
}

romanNumerals2.forEach(function(value, key) {
    console.log(key + " : " + value);
})

console.log("Key and value of five has been deleted: " + romanNumerals2.delete(5));
console.log(romanNumerals2);

romanNumerals2.clear();
console.log("After using clear() method on romanNumerals2: " , romanNumerals2);










