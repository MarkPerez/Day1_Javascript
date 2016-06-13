//Event Listener
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

function myfirst() {
var userinput1 = parseInt(document.getElementById("input1").value);

document.getElementById("demo").innerHTML = userinput1 + 1;     
    }

var event2 = document.getElementById("button2");
event2.addEventListener('click',mysecond,false);

function mysecond() {
var userinput1 = parseInt(document.getElementById("input1").value); 

document.getElementById("demo").innerHTML = userinput1 - 1;     
    }

