let hello = () => {
  // ts will infer that this type will be a function
  console.log("hello, world");
};

// hello = 'hello' // error

let greet: Function; //explicit type Function

greet = () => {
  //this is allowed because greet is a function
  console.log("hello, again");
};

// const add = (a: number, b: number, c?: number | string) => {
//params explicit type numbers, c is a union type as an option
const add = (a: number, b: number, c: number | string = 10) => {
  //params c adds default value 10, don't need the optional ?
  console.log(a + b);
  console.log(c); // void value when we don't actually return something, "a complete lack of return value"
  // void is different from undefined
};

add(5, 10);
add(5, 10, "20");

const minus = (a: number, b: number) => {
  return a + b;
};
// // explicit tells return value to a number
// const minus = (a:number, b:number): number => {
//     return a + b;
// }

let result = minus(10, 7); // ts will infer what will be returned by the function it was called by
// result will be of number type

// result = 'string' //error
