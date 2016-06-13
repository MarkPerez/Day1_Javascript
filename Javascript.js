//Event Listener
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

function myfirst() {
var userinput1 = parseInt(document.getElementById("input1").value);
var userinput2 = parseInt(document.getElementById("input2").value); 

if (userinput1 === userinput2){
 document.getElementById("demo").innerHTML = "the numbers are the same";   
}
    else {
   document.getElementById("demo").innerHTML = "the numbers are different";     
    }

}

