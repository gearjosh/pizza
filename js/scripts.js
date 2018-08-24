//Back End Logic

var Toppings = [
  //[topping, priceMultiplier]
  ["pepperoni", 1],
  ["sausage", 1],
  ["salami", 1],
  ["ham", 1],
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

function StartOrder() {
  newOrder = new Order;
  newPizza = new Pizza;
}

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
  } else {
    this.size = "no size"
    this.sizeCost = 0;
    this.sizeMultiplier = 0;
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
    this.crust = "gf";
    this.crustAddCost = 3;
  } else {
    this.crust = "No crust selected";
    this.crustAddCost = 0;
  }
};

Pizza.prototype.selectSauce = function(value) {
  if (value === 1) {
    this.sauce = "Classic Red Color";
  } else if (value === 2) {
    this.sauce = "Marinara al Fresco";
  } else if (value === 3) {
    this.sauce = "Creamy Pale Garlic";
  } else if (value === 4){
    this.sauce = "Thick-N-Rich Alfredo";
  } else {
    this.sauce = "No Sauce Selected";
  }
};

Pizza.prototype.selectExtraSauce = function(value) {
  if (value === 1) {
    this.extraSauce = true;
  } else {
    this.extraSauce = false;
  }
};

Pizza.prototype.selectExtraCheese = function(value) {

  if (value === 1) {
    this.extraCheese = 0;
  } else if (value === 2) {
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

multiplyToppings = function(pizzaObj) {
  var toppingArray = pizzaObj.toppings;
  var totalToppingCost = 0;
  var toppingTotals = toppingArray.map(function(topping, pizzaObj) {
    var cost = topping[1];
    var size = pizzaObj.sizeMultiplier;
    return cost * size;
  });
  for (var i=0; i<toppingTotals.length; i++) {
    totalToppingCost += toppingTotals;
  }
  return totalToppingCost;
};

Order.prototype.calculatePrice = function (pizzaObj) {
  this.price = pizzaObj.sizeCost + this.multiplyToppings(pizzaObj) + (pizzaObj.extraCheese * pizzaObj.sizeMultiplier) + pizzaObj.extraSauce;
  return this.price;
}.bind(this);


//Front End Logic
function fillBase(pizzaObj, orderObj) {
  if (pizzaObj.size === 1) {
    $("#display-size").append("Small");
  } else if (pizzaObj.size === 1) {
    $("#display-size").append("Medium");
  } else if (pizzaObj.size === 1) {
    $("#display-size").append("Large");
  } else if (pizzaObj.size === 1) {
    $("#display-size").append("Gigantotronic");
  } else {
    $("#display-size").append("No size selected");
  }
  $("#display-crust").append(pizzaObj.crust);
  $("#display-sauce").append(pizzaObj.sauce);
  if (pizzaObj.extraSauce === true) {
    $("#display-extra-sauce").append("Yep");
  } else {
    $("#display-extra-sauce").append("Nope");
  }
  if (pizzaObj.extraCheese === 1) {
    $("#display-extra-cheese").append("Normal Cheese");
  } else if (pizzaObj.extraCheese === 2) {
    $("#display-extra-cheese").append("Extra Cheese");
  } else if (pizzaObj.extraCheese === 3) {
    $("#display-extra-cheese").append("Double Cheese");
  } else {
    $("#display-extra-cheese").append("No Cheese At All");
  }
  $("#display-price").append(orderObj.calculatePrice(pizzaObj));
};

//User Interface
$(document).ready(function() {
  $("#create-order-button").click(function(event) {
    event.preventDefault();
    StartOrder();
    $("#order-builder").show();
  });
  $("#submit-base").click(function(event) {
    event.preventDefault();
    var userSize = parseInt($("#select-size").val());
    var userCrust = parseInt($("#select-crust").val());
    var userSauce = parseInt($("#select-sauce").val());
    var userExtraSauce = parseInt($("#select-extra-sauce").val());
    var userExtraCheese = parseInt($("#select-extra-cheese").val());

    newPizza.selectSize(userSize);
    newPizza.selectCrust(userCrust);
    newPizza.selectSauce(userSauce);
    newPizza.selectExtraSauce(userExtraSauce);
    newPizza.selectExtraCheese(userExtraCheese);
    newOrder.calculatePrice(newPizza);

    fillBase(newPizza, newOrder);
  });
});
