# PizzaTron 2000

#### A program that will let you order a fake pizza, Ausust 24, 2018

#### By **Josh Gearheart**

## Description

PizzaTron 2000 is a program that simulates the process of ordering a pizza.  It's purpose is to both amuse the user and to demonstrate my competency in JavaScript objects.  

PizzaTron 2000 takes a user's input on several different aspects of the pizza ordering experience.  Users can select size, crust, sauce, options for extra sauce or cheese, and 12 different toppings.  Upon selection, they can see their pizza and total cost update in real time.

## Specifications

### Back End Specs

- [x] PizzaTron can return pizza size to pizza object
- [x] PizzaTron can return pizza crust to pizza object
- [x] PizzaTron can return pizza sauce to pizza object
- [x] PizzaTron can return pizza toppings to pizza object
- [x] PizzaTron can calculate pizza price from selected options
- [x] PizzaTron can return pizza price to order object
- Extras:
  - [x] PizzaTron can modify crust cost in pizza object
  - [x] PizzaTron can modify extra sauce cost in pizza object
  - [ ] PizzaTron can modify topping cost multiplier in pizza object to allow for extra toppings
  - [ ] PizzaTron can add delivery fee to order object
  - [ ] PizzaTron can add delivery address to order object
  - [ ] PizzaTron can create a card object
  - [ ] PizzaTron can populate card object with: card number, expiration date, CVV code

### Front End Specs

- [x] PizzaTron allows user to select pizza size and displays it to user
- [x] PizzaTron allows user to select pizza crust and displays it to user
- [x] PizzaTron allows user to select pizza sauce and displays it to user
- [x] PizzaTron allows user to select pizza toppings and displays them all to user
- [x] PizzaTron displays updated price to user with each selection
- [ ] PizzaTron allows user to select extra toppings
- Extras:
  - [ ] PizzaTron allows user to opt for delivery for a fee
  - [ ] PizzaTron allows user to input address for delivery
  - [ ] PizzaTron allows user to add card as a payment method

## Setup/Installation Requirements

- Navigate to https://github.com/gearjosh/pizza
- Click the green `Clone or download` button on the right, and select Download ZIP.
- Unzip `pizza-master.zip.`
- Navigate to the `pizza-master` directory.
- Inside `pizza-master`, double-click on index.html

## Known Bugs

- Clicking a topping button multiple times adds toppings ad infinitum.  It's intended future state will allow for "extra" toppings with additional clicks, but it does not yet function.

## Support and contact details

If you run into any issues, or have questions, comments, or concerns, you can email me at comedian.sean.connery@gmail.com, though I may not respond right away.

## Technologies Used

This site uses JavaScript, the jQuery library, HTML, CSS, and the Bootstrap front-end framework.

### License

**Licensed under GPL**

Copyright (c) 2018 **Josh Gearheart**
