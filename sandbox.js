var character = "mario"; // ts uses inference based on the value it was initially assigned
var age = 30;
var isBlackBelt = false;
// character = 20; //=> will error
character = "luigi";
// age = 'yoshi'; //=> will error
age = 40;
// isBlackBelt = 'yes'; // => will error
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
