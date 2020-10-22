// // can still access DOM elements, query, just like JS

// // const anchor = document.querySelector("a");
// const anchor = document.querySelector("a")!; //add an ! to override the warning, only if you as a dev know it will return something
// console.log(anchor.href)

// // console.log(anchor.href); // will warn you if you don't have a !
// //errors with "this object can possibly be null" because type script doesn't know if there is an anchor tag in development. so it'll warn you

// // if(anchor){
// //     console.log(anchor.href)
// // }

// const form = document.querySelector('form')!; // hover will say HTMLFormElement
// const form = document.querySelector('.new-item-form')!; //hover will say Element

// Type casting
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// now we will have all the right methods and properties now with intellisense
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(
    type.value, // outputs as a string
    tofrom.value, // outputs as a string
    details.value, // outputs as a string
    amount.valueAsNumber //outputs as a number
  );
});
