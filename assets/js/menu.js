const defaultMeals = [
  { id: 1, name: "Idli Sambar", price: 120, img: "assets/images/meal1.jpg" },
  { id: 2, name: "Nutrition plate", price: 150, img: "assets/images/meal2.jpg" },
  { id: 3, name: "Salad Bowl", price: 90, img: "assets/images/meal3.jpg" },
  { id: 4, name: "Indian Thali", price: 140, img: "assets/images/meal4.jpg" }
];
let adminMeals = JSON.parse(localStorage.getItem("adminMeals")) || []
const meals = [...defaultMeals, ...adminMeals];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const mealGrid = document.getElementById("mealGrid");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

meals.forEach(meal => {
  mealGrid.innerHTML += `
    <div class="meal-card">
      <img src="${meal.img}" loading="lazy">
      <h3>${meal.name}</h3>
      <p>₹${meal.price}</p>
      <button onclick="addToCart(${meal.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id) {
  const meal = meals.find(m => m.id === id);
  cart.push(meal);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₹${item.price}</span>
      </div>
    `;
  });

  cartTotal.textContent = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function checkout() {
  alert("Checkout complete (demo)");
  cart = [];
  updateCart();
}

updateCart();