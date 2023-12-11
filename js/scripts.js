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
