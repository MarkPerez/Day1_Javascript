//Event Listener
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

function myfirst() {
var userinput1 = parseInt(document.getElementById("input1").value);
var userinput2 = parseInt(document.getElementById("input2").value);

if (userinput1 > 10 && userinput2 > 10){
    document.getElementById("demo").innerHTML = "both numbers are greater than 10";
}
    else if (userinput1 > 10 || userinput2 > 10){
    document.getElementById("demo").innerHTML = "at least one number is greater than 10";

}
else{
    document.getElementById("demo").innerHTML = "neither number is greater than 10";
  
}
    }



