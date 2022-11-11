console.log(a);
var a = 0;
console.log(a);
//输出：undefined
//输出：0

console.log(a);
function a() {};
var a = 10;
//输出：function a(){}

var a = 10;
function a(){};
console.log(a);
//输出：10


/* Udemy */
var favouriteFood = "grapes"

var foodThoughts = function() {
    console.log("Original favourite:" + favouriteFood);

    var favouriteFood = "sushi"

    console.log("New favourite food:" + favouriteFood);
}

foodThoughts()
//const
const favouriteFood = "grapes"

const foodThoughts = function() {
    console.log("Original favourite:" + favouriteFood);

    const favouriteFood = "sushi"

    console.log("New favourite food:" + favouriteFood);
}

foodThoughts()