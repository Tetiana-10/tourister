﻿/* перехід від хедеру*/
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

if (document.documentElement.clientWidth <= 550) {
    $("#titlet").html("Tourister");
} else {
    $("#titlet").html("Tourister - site from tourists from all over the world");
}

$("#ajax_button").click(function () {
    "use strict";
    if ($("#ajax_button").text() === "Read the verse") {
        var newp = $("<p></p>");
        newp.appendTo($("#stih"));
        newp.attr("id", "newp");
        newp.css("color", "white");
        $.ajax({
            url: "ajax_info.txt",
            dataType: "text",
            success: function (data) {
                data.replace("\n", "<br />", "g");
                $("#stih").html(data.replace(/\n/g, "<br />"));
            }
        });
        $("#ajax_button").html("Hide the verse");
        $("#ajax_button").css({
            "backgroundColor": "gray",
            "cursor": "pointer",
            "fontSize": "1em",
            "padding": "0.5em",
            "width": "10em",
            "borderRadius": "10px",
            "marginLeft": "1em",
            "textAlign": "center"
        });
        //$("#ajax_button").css({"backgroundColor":"gray"});
    } else {
        $("#stih").empty();
        $("#ajax_button").html("Read the verse");
        $("#ajax_button").css({
            "backgroundColor": "gray",
            "cursor": "pointer",
            "borderRadius": "10px"
        });
    }
});
$("#ajax_button2").click(function () {
    "use strict";
    if ($("#ajax_button2").text() === "View comparative table") {
        $("#ajax_table").css("visibility", "visible");

        $.getJSON("cities.json", function (result) {
            var table = "<tr><th>City</th><th>Country</th><th>Rate</th><th>Sea</th></tr>";
            $.each(result, function (i, field) {
                for (i = 0; i < field.length; i += 1) {
                    table += "<tr><td>" + field[i].name + "</td><td>" +
                            field[i].country + "</td><td>" + field[i].rate + "</td><td>"
                            + field[i].sea + "</td></tr>";
                }
                $("#ajax_table").html(table);
            });
            $("#ajax_button2_button").html("Hide comparative table");
        });
    } else {
        $("#ajax_table").html("");
        $("#ajax_button2_button").html("View comparative table");
        $("#ajax_table").css("visibility", "hidden");
    }
});
