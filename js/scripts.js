function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.price = 30;
}

var order = [];

Pizza.prototype.SizeOfPizzaToPrice = function() {
  if (this.size === "small") {
    this.price -= 10;
  } else if (this.size === "medium") {
    this.price = 30;
  } else if (this.size === "large") {
    this.price += 10;
  } else {
    this.price = 50;
  }
}

Pizza.prototype.TotalPrice = function() {
  (this.price += this.size + this.toppings.length);
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#size").val();
    var toppings = [];
       $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val());
    });
    var newPizza = new Pizza(pizzaSize);
      console.log(newPizza);
    order.push(newPizza);


    for(i = 0;i < toppings.length; i ++) {
      newPizza.toppings.push(toppings[i]);
    }
    order[0].SizeOfPizzaToPrice();
    alert(order[0].price);
    console.log(newPizza);

  });
})







  //
