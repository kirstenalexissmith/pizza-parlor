# _{Pizza Parlor}_

#### By _**{Kirsten Smith}**_

#### _{A webpage that calculates the cost of a custom pizza}_

## Technologies Used

* _VS Code_
* _HTML_
* _CSS_
* _Javascript_


## Description

_{This webpage will have the user input the size and toppings they desire on their pizza. It will then calculate and display the total cost based on the user's input.}_

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory. 
* Open `index.html` in your browser. 

## Tests
```
Describe: Pizza()

Test: "It should return a Pizza object with two properties for size and toppings"
Code: const pizzaOne = new Pizza("small", ["cheese, "pepperoni"]);
Expected Output: Pizza { size: "small" toppings: ["cheese", "pepperoni"] }

Describe: Pizza.prototype.getPizzaCost()

Test: "It should multiply the number of toppings in the array by 1.3 to get the toppings cost."
Code: const pizzaTwo = new Pizza("medium", ["cheese", "onions","mushrooms"])
      pizzaTwo.getPizzaCost()
Expected Output: 15.90

Test: "It should give the size small a value of 0, give the size medium a value of 2, and give large(the only remaining option) a value of 4 for the size cost.
Code: const pizzaThree = new Pizza("small", ["cheese", "onions"])
      pizzaThree.getPizzaCost()
Expected Output: 12.60

Test: "It should return total cost of pizza, rounded to 2 decimal points by adding base cost, toppings cost, and size cost."
Code: const pizzaFour = new Pizza("large", ["cheese", "pepperoni", "onions"]);
      pizzaFour.getPizzaCost()
Expected Output: 17.90

```
## Known Bugs

* Does not display anything if no size selected


## License

_[MIT](LICENSE.txt)_
_Copyright (c) _2023_ _Kirsten Smith_
