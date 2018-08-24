//Back End Logic

var Toppings = [
  //[topping, priceMultiplier]
  ["extraCheese", 1],
  ["pepperoni", 1],
  ["sausage", 1],
  ["salami", 1],
  ["canadianBacon", 1],
  ["bacon", 1],
  ["chicken", 1],
  ["anchovies", 1],
  ["pineapple", 0.5],
  ["mushrooms", 0.5],
  ["olives", 0.5],
  ["peppers", 0.5],
  ["onions", 0.5]
]

function Pizza() {
  this.size = NaN;
  this.crust = "";
  this.toppings = [];
  this.extraSauce = false;
};

function Order() {
  this.pizza = [];
  this.price = NaN;
  this.delivery = false;
};

Pizza.prototype.selectSize = function() {

}

Pizza.prototype.selectCrust = function() {

}

Pizza.prototype.selectSauce = function() {

}

Pizza.prototype.selectToppings = function() {

}

Order.prototype.calculatePrice = function () {

};


//Front End Logic
$(function) {

};
