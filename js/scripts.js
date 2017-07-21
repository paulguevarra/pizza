//Business Logic



//UI Logic
$(document).ready(function(){
  $("#blanks").submit(function(event){
    event.preventDefault();
    var inputName = $("input#name").val();

    var output = inputName

    $("#receipt").text(output);
  });
});
