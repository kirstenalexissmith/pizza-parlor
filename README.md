Describe: Pizza()

Test: "It should return a Pizza object with two properties for size and toppings"
Code: const myPizza = new Pizza("small", ["cheese, "pepperoni"]);
Expected Output: Pizza { , size: "small" toppings: ["cheese", "pepperoni"] }

Describe: Pizza.prototype.getPizzaCost()

Test: "It should return total cost of pizza, rounded to 2 decimal points."
Code: const myPizza = new Pizza("small", ["cheese, "pepperoni"]);
      myPizza.getPizzaCost()
Expected Output: 12.60
