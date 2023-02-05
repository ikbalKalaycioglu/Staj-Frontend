window.onload = function () {
    var menu = document.getElementById("menu");
    menu.addEventListener("mouseover", mouseOverFunc);
    menu.addEventListener("mouseout", mouseOutFunc);
}

function mouseOverFunc() {
    var menuText = document.getElementsByClassName("menu");
    var pageContent = document.getElementById("demo");

    menu.style.width = "20%";
    menu.style.transition = "all .3s ease";

    menuText[0].style.display = "table-cell";
    pageContent.style.marginLeft = "21%";
}

function mouseOutFunc() {
    var pageContent = document.getElementById("demo");
    var menuText = document.getElementsByClassName("menu");

    menu.style.width = "5%";
    menuText[0].style.display = "none";
    pageContent.style.marginLeft = "10%";
    pageContent.style.transition = "all .3s ease";
}