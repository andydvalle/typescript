"use strict";
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
var form = document.querySelector(".new-item-form");
// now we will have all the right methods and properties now with intellisense
// console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, // outputs as a string
    tofrom.value, // outputs as a string
    details.value, // outputs as a string
    amount.valueAsNumber //outputs as a number
    );
});
