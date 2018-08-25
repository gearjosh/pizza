//Back End Logic

var toppings = [
  ["Pepperoni", 1.00],
  ["Sausage", 1.00],
  ["Salami", 1.00],
  ["Ham", 1.00],
  ["Bacon", 1.00],
  ["Chicken", 1.00],
  ["Anchovies", 1.00],
  ["Pineapple", 0.50],
  ["Mushrooms", 0.50],
  ["Olives", 0.50],
  ["Peppers", 0.50],
  ["Onions", 0.50]
]

function Pizza() {
  this.size = "";
  this.crust = ""
  this.sauce = ""
  this.toppings = [];
  this.sizeCost = NaN;
  this.sizeMultiplier = NaN;
  this.crustAddCost = 0;
  this.extraSauce = 0;
  this.extraCheese = 0;
  this.noCheese = false;
  this.toppingCosts = [];
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
    this.sizeCost = 10.00;
    this.sizeMultiplier = 0.75;
  } else if (value === 2) {
    this.size = "md";
    this.sizeCost = 13.00;
    this.sizeMultiplier = 1;
  } else if (value === 3) {
    this.size = "lg";
    this.sizeCost = 16.00;
    this.sizeMultiplier = 1.5;
  } else if (value === 4){
    this.size = "xl"
    this.sizeCost = 20.00;
    this.sizeMultiplier = 2;
  } else {
    this.size = "no size"
    this.sizeCost = 0;
    this.sizeMultiplier = 0;
  }
};

Pizza.prototype.selectCrust = function(value) {
  if (value === 1) {
    this.crust = "Thrown-in-the-air Style";
  } else if (value === 2) {
    this.crust = "Very Super Thin";
  } else if (value === 3) {
    this.crust = "The Deepest Dish (+$2)";
    this.crustAddCost = 2.00;
  } else if (value === 4) {
    this.crust = "Free of Glutens (+$3)";
    this.crustAddCost = 3.00;
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
  if (value === 2) {
    this.extraSauce = 1.00;
  } else {
    this.extraSauce = 0;
  }
};

Pizza.prototype.selectExtraCheese = function(value) {

  if (value === 1) {
    this.extraCheese = 0;
  } else if (value === 2) {
    this.extraCheese = 1.00;
  } else if (value === 3) {
    this.extraCheese = 2.00;
  } else if (value === 4) {
    this.noCheese = true;
  }
};

Pizza.prototype.selectToppings = function(array) {
  this.toppings.push(array[0]);
  this.toppingCosts.push(array[1]);
};

multiplyToppings = function(pizzaObj) {
  debugger
  var toppingCostArray = pizzaObj.toppingCosts;
  var totalToppingCost = 0;
  var toppingTotals = toppingCostArray.map(function(value) {
    var size = parseFloat(pizzaObj.sizeMultiplier);
    return value * size;
  });
  for (var i=0; i<toppingTotals.length; i++) {
    totalToppingCost = parseFloat(totalToppingCost) + parseFloat(toppingTotals[i]);
  }
  return totalToppingCost;
};

calculatePrice = function (pizzaObj, orderObj) {
  orderObj.price = parseFloat(pizzaObj.sizeCost) +
  parseFloat(pizzaObj.crustAddCost) +
  parseFloat(multiplyToppings(pizzaObj)) +
  (parseFloat(pizzaObj.extraCheese) * parseFloat(pizzaObj.sizeMultiplier)) +
  parseFloat(pizzaObj.extraSauce);
  var total = orderObj.price.toFixed(2);
  return total;
};


//Front End Logic

function emptyDisplay() {
  $("#display-size").empty();
  $("#display-crust").empty();
  $("#display-sauce").empty();
  $("#display-sauce").empty();
  $("#display-extra-sauce").empty();
  $("#display-extra-cheese").empty();
  $("#display-price").empty();
};

function fillBase(pizzaObj, orderObj) {
  emptyDisplay();

  if (pizzaObj.size === "sm") {
    $("#display-size").text("Small ($10)");
  } else if (pizzaObj.size === "md") {
    $("#display-size").text("Medium ($13)");
  } else if (pizzaObj.size === "lg") {
    $("#display-size").text("Large ($16)");
  } else if (pizzaObj.size === "xl") {
    $("#display-size").text("Gigantotronic ($20)");
  } else {
    $("#display-size").text("No size selected");
  }
  $("#display-crust").text(pizzaObj.crust);
  $("#display-sauce").text(pizzaObj.sauce);
  if (pizzaObj.extraSauce === 1) {
    $("#display-extra-sauce").text("Yep");
  } else {
    $("#display-extra-sauce").text("Nope");
  }
  if (pizzaObj.extraCheese === 1) {
    $("#display-extra-cheese").text("Normal Cheese");
  } else if (pizzaObj.extraCheese === 2) {
    $("#display-extra-cheese").text("Extra Cheese");
  } else if (pizzaObj.extraCheese === 3) {
    $("#display-extra-cheese").text("Double Cheese");
  } else if (pizzaObj.extraCheese === 4) {
    $("#display-extra-cheese").text("No Cheese At All");
  } else {
    $("#display-extra-cheese").text("Normal Cheese");
  }
  $("#display-price").text("$" + calculatePrice(pizzaObj, orderObj));
};

function addTopping(pizzaObj, orderObj, id, toppingArray) {
  var toppingIndex = id;
  toppingArray.forEach(function(topping, index) {
    if (index === toppingIndex) {
      pizzaObj.selectToppings(topping);
      $("#display-toppings").append("<li>" + topping[0] + "</li>");
      $("#display-price").empty();
      $("#display-price").text("$" + calculatePrice(pizzaObj, orderObj));
    }
  });
};

//User Interface
$(document).ready(function() {
  $("#create-order-button").click(function(event) {
    event.preventDefault();
    emptyDisplay();
    StartOrder();
    $("#order-builder").show();
  });

  $("#submit-base").click(function(event) {
    event.preventDefault();
    var userSize = parseFloat($("#select-size").val());
    var userCrust = parseFloat($("#select-crust").val());
    var userSauce = parseFloat($("#select-sauce").val());
    var userExtraSauce = parseFloat($("#select-extra-sauce").val());
    var userExtraCheese = parseFloat($("#select-extra-cheese").val());

    newPizza.selectSize(userSize);
    newPizza.selectCrust(userCrust);
    newPizza.selectSauce(userSauce);
    newPizza.selectExtraSauce(userExtraSauce);
    newPizza.selectExtraCheese(userExtraCheese);

    fillBase(newPizza, newOrder);
    $(".topping-button").show();
  });

  $(".topping-button").click(function(event) {
    event.preventDefault();
    var clickedID = parseFloat($(this).attr("id"));
    addTopping(newPizza, newOrder, clickedID, toppings);
  });
});
