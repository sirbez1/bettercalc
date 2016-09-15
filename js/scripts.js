function add(x, y) {
	var result = x + y
  return result
};

function times(x, y) {
	var result = x * y
  return result
};


function divide(x, y) {
	var result = x / y
  return result
};

function subtract(x, y) {
	var result = x - y
  return result
};

// var number1 = parseInt(prompt("Enter a Number"))
// var number2 = parseInt(prompt("Enter Another Number"))

$(document).ready(function() {
  $("form#numbers").submit(function(event) {
  var number1 = parseInt($("input#number1").val());
  var number2 = parseInt($("input#number2").val());
  if ($("#operator").val()=="Addition") {
    alert(add(number1,number2));
  } else if ($("#operator").val()=="Subtraction") {
    alert(subtract(number1,number2));
  } else if ($("#operator").val()=="Multiplication") {
    alert(times(number1,number2));
  } else if($("#operator").val()=="Division") {
    alert(divide(number1,number2));
  }
  event.preventDefault();
  });
});

//  var num1= $(#number1).val();
//  var num2= $(#number2).val();
  //alert(num1);
