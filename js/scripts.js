//Business Logic
function Pizza(size){
  this.pSize = size;
  this.pTopping = [];
}

Pizza.prototype.toCalc = function(){
  return this.pSize + this.pTopping
}



//UI Logic
$(document).ready(function(){
  $("#blanks").submit(function(event){
    event.preventDefault();
    var inputName = $("input#name").val();
    var output = inputName

    var inputSize = parseInt($("select#size").val());
    var newPizza = new Pizza(inputSize)
    // alert(newPizza);


    $("#receipt").text(output + ",  your order costs $ " + newPizza.toCalc());

  });
});
