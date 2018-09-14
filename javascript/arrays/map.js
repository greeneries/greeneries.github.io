

const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95 }
];

const names = cart.map(x => x.name);              // ["Widget", "Gadget"]
console.log(names);

const prices = cart.map(x => x.price);            // [9.95, 22.95]
console.log(prices);

const discountPrices = prices.map(x => x*0.8);    // [7.96, 18.36]
console.log(discountPrices);

const lcNames = names.map(x => x.toLowerCase());    // ["widget", "gadget"]
console.log(lcNames);
