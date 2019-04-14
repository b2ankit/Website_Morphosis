window.onscroll = function()
{
    myFunction();
};

var navbar = document.getElementById("navbar");

function myFunction() {
    if (window.pageYOffset >= 100) 
    {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}