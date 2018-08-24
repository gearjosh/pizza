//Back End Logic

var Toppings = [
  //[topping, priceMultiplier]
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
  this.size = "";
  this.crust = ""
  this.sauce = ""
  this.toppings = [];
  this.sizeCost = NaN;
  this.sizeMultiplier = NaN;
  this.crustAddCost = 0;
  this.extraSauce = false;
  this.extraCheese = 0;
  this.noCheese = false;
  this.toppingMultipliers = [];
};

function Order() {
  this.pizza = [];
  this.price = NaN;
  this.delivery = false;
};

Pizza.prototype.selectSize = function(value) {
  if (value === 1) {
    this.size = "sm";
    this.sizeCost = 10;
    this.sizeMultiplier = 0.75;
  } else if (value === 2) {
    this.size = "md";
    this.sizeCost = 13;
    this.sizeMultiplier = 1;
  } else if (value === 3) {
    this.size = "lg";
    this.sizeCost = 16;
    this.sizeMultiplier = 1.5;
  } else if (value === 4){
    this.size = "xl"
    this.sizeCost = 20;
    this.sizeMultiplier = 2;
  }
};

Pizza.prototype.selectCrust = function(value) {
  if (value === 1) {
    this.crust = "thrown";
  } else if (value === 2) {
    this.crust = "thin";
  } else if (value === 3) {
    this.crust = "deep";
    this.crustAddCost = 2;
  } else if (value === 4) {
    this.crust = gf;
    this.crustAddCost = 3;
  }
};

Pizza.prototype.selectSauce = function(boolean) {
  if (boolean === true) {
    extraSauce = true;
  }
};

Pizza.prototype.selectExtraCheese = function(value) {
  if (value === 2) {
    this.extraCheese = 1;
  } else if (value === 3) {
    this.extraCheese = 2;
  } else if (value === 4) {
    this.noCheese = true;
  }
};

Pizza.prototype.selectToppings = function(array) {
  this.toppings.push(array[0]);
  this.toppingMultipliers.push(array[0]);
};

Order.prototype.multiplyToppings = function(pizzaObj) {
  var array = pizzaObj.toppings;
  var totalToppingCost = NaN;
  var toppingTotals = array.map(function(array, pizzaObj) {
    var cost = array[1];
    var size = pizzaObj.sizeMultiplier;
    return cost * size;
  });
  for (var i=0; i<toppingTotals.length; i++) {
    totalToppingCost += toppingTotals;
  }
  return totalToppingCost;
};

Order.prototype.calculatePrice = function (pizzaObj) {
  this.price = pizzaObj.sizeCost + this.prototype.multiplyToppings(pizzaObj) + pizzaObj.extraCheese + pizzaObj.extraSauce;
  return this.price;
};


//Front End Logic
$(document).ready(function() {
  $("#create-order-button").click(function(event) {
    event.preventDefault();
    $("#order-builder").show();
  });
});
