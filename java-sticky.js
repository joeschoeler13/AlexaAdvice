//START: Sticky navbar section
var navbar = document.getElementById("navbar1");
var sticky = navbar.offsetTop;

$(window).scroll(function() {    
    if ($(this).scrollTop() > sticky) {
        navbar.className += " sticky";
    } else {
        navbar.className = "navbar";
    }
})
//END: Sticky navbar section