//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.getPizzaCost = function () {
  const baseCost = 10;
  const toppingCost = this.toppings.length * 1.3;
  const sizeCost = this.size === "small" ? 0 : this.size === "medium" ? 2 : 4;

  let totalCost = baseCost + toppingCost + sizeCost;
  return totalCost.toFixed(2);
};

//UI Logic
function pizzaFormHandler(e) {
  e.preventDefault();
  const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(checkbox => checkbox.value);
  const selectedSize = document.querySelector('input[name="size"]:checked');
  const pizzaOrder = new Pizza(selectedSize.value, selectedToppings)
  const cost = pizzaOrder.getPizzaCost();

  document.getElementById("pizza-cost").textContent = `$${cost}`;
};



window.addEventListener("load", function () {
  document.querySelector("#form").addEventListener("submit", pizzaFormHandler);

  const refresh = document.getElementById("refresh");
  refresh.addEventListener("click", function () {
    location.reload();
  });
});