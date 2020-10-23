//classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 100);
const invTwo = new Invoice("luigi", "work on the luigi website", 150);

let invoices: Invoice[] = []; // only adds instances from the Invoice class
// invoices.push("hello") // error
invoices.push(invOne);
invoices.push(invTwo);
console.log(invOne, invTwo);
console.log(invoices);

// can access the different properties of these public Invoice Objects
invOne.client = "yoshi";
invTwo.amount = 200;

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
