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
Code: const myPizza = new Pizza("small", ["cheese, "pepperoni"]);
Expected Output: Pizza { size: "small" toppings: ["cheese", "pepperoni"] }

Describe: Pizza.prototype.getPizzaCost()

Test: "It should return total cost of pizza, rounded to 2 decimal points."
Code: const myPizza = new Pizza("small", ["cheese", "pepperoni"]);
      myPizza.getPizzaCost()
Expected Output: 12.60

```
## Known Bugs

* Does not reset, clear data. User has to refresh page to start a new pizza.


## License

_[MIT](LICENSE.txt)_
_Copyright (c) _2023_ _Kirsten Smith_## Tests
