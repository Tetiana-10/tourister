﻿$(document).ready(function(){
"use strict";
$("#destination").click(function () {
    "use strict";
    window.location.href = "./destin.html";
});
$("#logo").mouseover(function () {
    "use strict";
    $("#logo").css("color", "rgb(187,187,187)");
});
$("#logo").mouseout(function () {
    "use strict";
    $("#logo").css("color", "white");
});
$("#logo").click (function () {
    "use strict";
    document.location.href = "./index.html";
});
$("#destination").mouseover(function () {
    "use strict";
    $("#destination").css("color", "rgb(187,187,187)");
});
$("#destination").mouseout(function () {
    "use strict";
    $("#destination").css("color", "white");
});
$("#anketa").mouseover(function () {
    "use strict";
    $("#anketa").css("color", "rgb(187,187,187)");
});
$("#anketa").mouseout(function () {
    "use strict";
    $("#anketa").css("color", "white");
});
$("#anketa").click(function () {
    "use strict";
    document.location.href = "./anketa.html";
});

$("#tour_creation").mouseover(function () {
    "use strict";
    $("#tour_creation").css("color", "rgb(187,187,187)");
});
$("#tour_creation").mouseout(function () {
    "use strict";
    $("#tour_creation").css("color", "white");
});
$("#tour_creation").click(function () {
    "use strict";
    window.location.href = "./canvas.html";
});

var slides = document.querySelectorAll(".slides .slide");
var currentSlide = 0;
function nextSlide() {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = "slide showing";
}
var slideInterval = setInterval(nextSlide, 6000);
$("#slidu").onclick = function () {
    clearInterval(slideInterval);
};
/*
if(document.documentElement.clientWidth<=550){
   clearInterval(slideInterval);
   $("#first-slide").innerHTML="";
   $("#substring").innerHTML="";
   $("#first-slide").style.marginLeft="-20px";
}
else{
   slideInterval = setInterval(nextSlide,6000);
   $("#first-slide").innerHTML="Tourister- это партнеры в более чем 50 странах мира";
   $("#substring").innerHTML="Для остановки слайдера нажмите на картинку";
   $("#first-slide").style.marginLeft="0px";
}
*/
var textt = $("#anchor2");
var picture = $("#barcelona-move");
var textt2 = $("#anchor4");
var picture2 = $("#vena-move");
window.onresize = function () {
    if (document.documentElement.clientWidth <= 1360) {
        picture.parentNode.insertBefore(textt, picture);
        picture2.parentNode.insertBefore(textt2, picture2);
    } else {
        textt.parentNode.insertBefore(picture, textt);
        textt2.parentNode.insertBefore(picture2, textt2);
    }
};
});
