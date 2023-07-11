// document.getElementById("demo")
// document.getElementByClassName("demo")
// document.getElementByTagName("demo")

// // function paragraph(){
//     document.getElementById("demo").innerHTML="my name is sabitha";
// }

// var a = 5;
// var b = 10;
// var c = a + b;
// document.getElementById("add").innerHTML=c;

function addition(){
var a = parseInt(document.getElementById("n1").value);
var b = parseInt(document.getElementById("n2").value);
var c = a + b;
document.getElementById("addition").innerHTML=c;
}

function subtraction(){
   var a = document.getElementById("n1").value;
   var b = document.getElementById("n2").value;
   var c = a - b;
   document.getElementById("subtraction").innerHTML=c;
}

function multiplication(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = a * b;
    document.getElementById("multiplication").innerHTML=c;
}
function division(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = a / b;
    document.getElementById("division").innerHTML=c;
}






