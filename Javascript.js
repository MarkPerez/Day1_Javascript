//Event Listener
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

function myfirst() {
var userinput1 = parseInt(document.getElementById("input1").value);

if (userinput1 < 0){
     document.getElementById("demo").innerHTML = "the number is negative";
    }
else if (userinput1 < 10){
    document.getElementById("demo").innerHTML = "the number is less than 10";
}
    else if (userinput1 > 10){
    document.getElementById("demo").innerHTML = "the number is greater than 10";

}
else{
    document.getElementById("demo").innerHTML = "the number is 10";
  
}
    }



