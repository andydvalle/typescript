"use strict";
//classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 100);
var invTwo = new Invoice("luigi", "work on the luigi website", 150);
var invoices = []; // only adds instances from the Invoice class
// invoices.push("hello") // error
invoices.push(invOne);
invoices.push(invTwo);
console.log(invOne, invTwo);
console.log(invoices);
// can access the different properties of these public Invoice Objects
invOne.client = "yoshi";
invTwo.amount = 200;
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
