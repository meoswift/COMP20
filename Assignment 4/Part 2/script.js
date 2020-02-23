function calculateOrder() {
  for (let i = 0; i < products.length; i++)
    subtotal += products[i].price * products[i].quantity;

  subtotal.toFixed(2);
  tax   = (subtotal * 0.0625).toFixed(2);
  total = (subtotal - tax).toFixed(2);
  if (subtotal >= 20) {
    discount = (total * 0.1).toFixed(2);
    total = (total - discount).toFixed(2);
  }
}

function populateProducts() {
  const hotdogs = parseInt(encodeURIComponent(hotdogsInput.value));
  const fries   = parseInt(encodeURIComponent(friesInput.value));
  const drinks  = parseInt(encodeURIComponent(drinksInput.value));
  products[0].quantity = hotdogs;
  products[1].quantity = fries;
  products[2].quantity = drinks;
}

function showTotalPrice() {
  const itemQuantities = document.querySelector('#items-quantities');
  const subtotalBox    = document.querySelector('#subtotal');
  const taxBox         = document.querySelector('#tax');
  const discountBox    = document.querySelector('#discount');
  const totalBox       = document.querySelector('#total');

  for (let i = 0; i < products.length; i++) {
    itemQuantities.innerHTML += "(" + products[i].quantity + ") " + products[i].item + "<br>";
  }
  subtotalBox.innerHTML = "<b>Subtotal</b>: $" + subtotal.toString() + "<br>";
  taxBox.innerHTML      = "<b>Tax</b>: $" + tax.toString() + "<br>";
  discountBox.innerHTML = "<b>Discount</b>: $" + discount.toString() + "<br>";
  totalBox.innerHTML    = "<b>Total</b>: $" + total.toString() + "<br>";
}

function showOrderSummary() {
  populateProducts();
  calculateOrder();
  showTotalPrice();
}

function onSubmit(event) {
  event.preventDefault();
  totalBox.classList.remove('hidden');
  orderBox.classList.add('hidden');
  showOrderSummary();
}

function onNewOrder() {
  location.reload(true);
  totalBox.classList.add('hidden');
  orderBox.classList.remove('hidden');
}


let subtotal = 0;
let total    = 0;
let tax      = 0;
let discount = 0;

const products = [
    {
      item: "Hotdogs",
      price: 3.25,
      quantity: 0
    },
    {
      item: "French Fries",
      price: 2.00,
      quantity: 0
    },
    {
      item: "Drinks",
      price: 1.50,
      quantity: 0
    }
];

const totalBox     = document.querySelector('#total-box');
const orderBox     = document.querySelector('#order-box');
const hotdogsInput = document.querySelector('#hotdogs');
const friesInput   = document.querySelector('#fries');
const drinksInput  = document.querySelector('#drinks');
const newOrder     = document.querySelector('#new-order');
const form         = document.querySelector('form');
form.addEventListener('submit', onSubmit);
newOrder.addEventListener('click', onNewOrder);
