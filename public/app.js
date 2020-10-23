"use strict";
//classes
var Invoice = /** @class */ (function () {
    // readonly client: string; // only allows to read outside and inside the class, can not change the value
    // private details: string; // makes this property private only allow read and change inside of the class only
    // amount: number; // default. this is the same as explicitly placing 'public' in front of it. can read and change inside and outside the class.
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    //shorthand of the ^ above commented code
    function Invoice(client, // you have to put the modifier in front of the variable name
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 100);
var invTwo = new Invoice("luigi", "work on the luigi website", 150);
var invoices = []; // only adds instances from the Invoice class
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    // console.log(inv.client, inv.details, inv.amount, inv.format()); // details are now private
    console.log(inv.client, inv.amount, inv.format());
});
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
