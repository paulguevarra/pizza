//Business Logic
function Pizza(size, topping){
  this.pSize = size;
  this.pTopping = topping;
}

Pizza.prototype.toCalc = function(){
  return this.pSize + this.pTopping
}



//UI Logic
$(document).ready(function(){
  $("form#beginOrder").submit(function(event){
    event.preventDefault();
    var userStart = $("#orderStart").val();
    if (userStart === "yes"){
      $("#survey").show();
      $("#beginOrderDiv").hide();
    } else {
      alert("Think about it and come back when ready.")
    }
  });

  $("#blanks").submit(function(event){
    event.preventDefault();
    var inputName = $("input#name").val();
    var output = inputName
    var inputTopping = 0
    $("input:checkbox[name=topping]:checked").each(function(i, elm){
      inputTopping += parseInt(elm.value);
    });
    var inputSize = parseInt($("select#size").val());
    var newPizza = new Pizza(inputSize, inputTopping)
    // alert(newPizza);

    $("#final").show()
    $("#receipt1").text(output);
    $("#receipt2").text( "$" + newPizza.toCalc() + ".00");

  });
});
