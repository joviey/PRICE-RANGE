let x = document.getElementsByClassName("min").addEventListener("onclick", validateslide);
function validateslide(){
    if (isNaN(x) || x < 2000 || x > 6000){
        document.getElementsByClassName("slide-container").style.color = "blue"
    }
    else{
        document.getElementsByClassName("slide-container").style.color = "green"
    }
}
/*var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hello World!");
}*/

document.getElementById("testbtt").addEventListener("click", myFunction);
function myFunction(){
    document.getElementById("demo").innerHTML = "it is working";
}