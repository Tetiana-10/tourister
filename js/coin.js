//window.body.css("backgroundColor","Gainsboro");
$("#logo").mouseover(function () {
    "use strict";
    $("#logo").css("color", "rgb(187,187,187)");
});
$("#logo").mouseout(function () {
    "use strict";
    $("#logo").css("color", "white");
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
$("#destination").click(function () {
    "use strict";
    window.location.href = "./destin.html";
});
$("#logo").click(function () {
    "use strict";
    window.location.href = "./main.html";
});
$("#anketa").click(function () {
    "use strict";
    window.location.href = "./anketa.html";
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
$(document).ready(function () {
    "use strict";
    function show(str) {
        if (confirm(str)) {
            location.reload();
        }
    }
    $("#move_button").click(function () {
        $("p").fadeOut(1250);
        $("#anim_div").animate({left: "1000px"}, {duration: 2000});
        $("#move_button").animate({fontSize: "1.2em"}, "slow");
        //$("#anim_div").animate({width: 0}, "slow");
        if (Math.random() >= 0.5) {
            $("#anim_div_1").fadeOut(1550);
            setTimeout(show, 2900, "Ой! Попробуйте еще раз.");
        } else {
            $("#anim_div_1").fadeOut(4000);
            setTimeout(show, 2900, "Урааа! Пингвин успел дойти до яблока.");
        }
    });


    $.fn.shake = function (time, step) {//для того, щоб серденько стрибало

        if (!step) {
            step = 4;
        }
        this.animate({top: "-=" + step}, time / 4);
        this.animate({top: "+=" + (2 * step)}, time / 2);
        this.animate({top: "-=" + step}, time / 4);
        return $(this);
    };
    var b = function () {
        $("#cat").animate({left: "+=350"}, 5000);
        var cntr = 0;
        var a = function () {
            $(".heart").shake(500);
            cntr += 1;
        };
        var shaking = function () {

            if (cntr !== 49) {
                a();
                setTimeout(a, 60);
            }
        };
        shaking();//
        setTimeout(function () {
            $(".heart").animate({left: "+=500", opacity: "0"}, 1500);
            $(".heart").animate({left: "0", opacity: "1"}, "fast");
        }, 3000);
    };
    var heart_animation = function () {//щоб воно рухалося
        b();
        setTimeout(b, 12000);
    };
    $("#cat").click(function () {//вмикання анімації
        heart_animation();
    });
});


//http://s1.iconbird.com/ico/2013/8/428/w256h2561377930217catcage.png
//http://s1.iconbird.com/ico/2013/8/428/w256h2561377930277catpurr.png
//http://s1.iconbird.com/ico/2013/7/398/w128h1281374354860heart.png
//