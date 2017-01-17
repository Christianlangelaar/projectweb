// bronnen: www.w3schools.com/css/css_dropdowns.asp , https://www.youtube.com/watch?v=SGKXZUGe2sw , http://www.w3schools.com/howto/howto_js_sidenav.asp
/* dropdown sorteren */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* hartje */
var image_tracker = 'images/heart.png';

function change() {
    var image = document.getElementById('imgchange');
    if (image_tracker == 'images/heart.png') {
        image.src = "images/fullheart.png";
        image_tracker = 'images/fullheart.png';
    } else {
        image.src = 'images/heart.png';
        image_tracker = 'images/heart.png';
    }
}


