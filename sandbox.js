//array
var names = ["luigi", "mario", "yoshi"];
names.push("toad");
// names.push(3); //=> error
// names[0] = 3; //=> error
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun'); //=> error
// numbers[1] = 'shaun'; //=> error
var mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu"); //=> will work
mixed.push(10); //=> will work
mixed[0] = 1; //=> will work
//objects
var ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
ninja.age = 40; // => will work
ninja.name = "ryu"; // => will work
// ninja.age = "30"; // error
ninja.skills = ["fighting", "sneaking"]; // error can not add additional properties to it
ninja = {
    //needs to be the same exact properties
    name: "yoshi",
    belt: "orange",
    age: 40
};
