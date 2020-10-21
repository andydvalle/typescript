let character = "mario"; // ts uses inference based on the value it was initially assigned
let age = 30;
let isBlackBelt = false;

// character = 20; //=> will error
character = "luigi";

// age = 'yoshi'; //=> will error
age = 40;

// isBlackBelt = 'yes'; // => will error
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));
