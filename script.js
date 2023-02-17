// num = 5; // the variable "num" is created if it didn't exist

// //alert(num); // 5

// console.log(num)


// let name = "john";
// let admin = name;

// console.log(admin);

// let planet = "earth";
// console.log(planet);



// let current_visitor = "john";
// let name2 = current_visitor; 
// console.log(name2);

// let x = 10;
// let y = 20;
// let z = x + y;

// // console.log("The answer is: " + z);

// // console.log(2 + 35 + 7 + 77 + 8 +  9);
// // console.log((4 + 6 + 9) / 77);

// // let max = 57;
// // let actual = max - 13;
// // let avg = actual/max;

// // console.log(avg);

//this is the beginning of fundamentals 2

// embed a variable
// alert( `Hello, ${name}!` ); // Hello, John!

// // embed an expression
// alert( `the result is ${1 + 2}` ); // the result is 3

// console.log(name);

// if (hour < 18) {
//   greeting = "Good day";
// }
// hour = 6;
// counsol.log(greeting(greeting));



//making a table!!!!!]



const artists = [
        {
          first: 'René',
          last: 'Magritte'
        },
        {
          first: 'Chaim',
          last: 'Soutine'
        },
        {
          first: 'Henri',
          last: 'Matisse'
        }
      ];
      console.table(artists);

//exersises from JS FUNDAMENTALS 3
function favoriteAnimal(animal) {
   return animal + " is my favorite animal!"
 }

 console.log(favoriteAnimal("DOG"))

function add7(num) {
  return num + 7
}

console.log(add7(14))

function multiply(a, b) {
  return a * b;

}

console.log(multiply(100, 50))

function capitalize(str2) {

  str2 = str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase()
  return str2;

}
console.log(capitalize("TEST"));


function myGeeks(res) {
    // var str = "Gee";
    var res = res.charAt(res.length-1);
  return res;
}

console.log(myGeeks("abcdE"))

// lastLetter("abcd")