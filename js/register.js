//register
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myVxod");
var close1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
    modal1.style.display = "block";
}

close1.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

//register
var modal = document.getElementById("myModal");
var btn = document.getElementById("myRegister");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//burger menu
var myHeader = document.getElementById("myHeader");
var burger = document.getElementById("burgerBtn");
var burgerClose = document.getElementById("burger__close");

burger.onclick = function() {
    myHeader.style.display = "block";
}

burgerClose.onclick = function() {
    myHeader.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == myHeader) {
        myHeader.style.display = "none";
    }
}