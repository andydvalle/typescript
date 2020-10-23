//classes
class Invoice {
  // readonly client: string; // only allows to read outside and inside the class, can not change the value
  // private details: string; // makes this property private only allow read and change inside of the class only
  // amount: number; // default. this is the same as explicitly placing 'public' in front of it. can read and change inside and outside the class.

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  //shorthand of the ^ above commented code
  constructor(
    readonly client: string, // you have to put the modifier in front of the variable name
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 100);
const invTwo = new Invoice("luigi", "work on the luigi website", 150);

let invoices: Invoice[] = []; // only adds instances from the Invoice class
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  // console.log(inv.client, inv.details, inv.amount, inv.format()); // details are now private
  console.log(inv.client, inv.amount, inv.format());
});

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
