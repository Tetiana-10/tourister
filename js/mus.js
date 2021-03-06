var key;
var audioTrack = $("#audiotrack");
var muteButton = $("#muteButton");
var volumeSlider = $("#volumeSlider");
var playButton = $("#playButton");
var fader = $("#fader");
var playback = $("#playback");
var playbackTime = $("#playbacktime");
var playhead = $("#playhead");
function volumePic() {
    "use strict";
    $("#audiotrack").get(0).volume = $("#volumeSlider").get(0).value;
}
function setText(el, vtext) {
    "use strict";
    $("#playButton").html(vtext);
}
function finish() {
    "use strict";
    audioTrack.currentTime = 0;
    setText(playButton, "Play");
}

function updatePlayhead() {
    "use strict";
    $("#playhead").get(0).value = $("#audiotrack").get(0).currentTime;
    var s = parseInt($("#audiotrack").currentTime % 60);
    var m = parseInt(($("#audiotrack").currentTime / 60) % 60);
    s = (s >= 10) ? s : "0" + s;
    m = (m >= 10) ? m : "0" + m;
    $("#playbacktime").html(m + ":" + s);

}
function setAttributes(el, attrs) {
    "use strict";
    for (key in attrs) {
        el.attr(key, attrs[key]);
    }
}

//var audioPlayer = $("#audioplayer");

setText(playButton, "Play");
muteButton.html("volume");
setAttributes(playButton, { "type": "button", "class": "ss-icon" });
setAttributes(muteButton, { "type": "button", "class": "ss-icon" });
muteButton.css("display", "block");
muteButton.css("margin", "0 auto");
//var duration = audioTrack.duration;
setAttributes(playhead, { "min": "0", "max": "100", "value": "0", "id": "playhead" });
audioTrack.removeAttr("controls");
$("#playButton").on("click", function () {
    //alert($("#audiotrack").get(0).paused);
    if ($("#audiotrack").get(0).paused) {
        setText(this, "Pause");
        $("#audiotrack").get(0).play();
    } else {
        setText(this, "Play");
        $("#audiotrack").get(0).pause();
    }
});
muteButton.on("click", function () {
    if ($("#audiotrack").get(0).volume === 0) {
        var restoreValue;
        $("#audiotrack").get(0).volume = restoreValue;
        $("#volumeSlider").get(0).value = restoreValue;
    } else {
        $("#audiotrack").get(0).volume = 0;
        restoreValue = $("#volumeSlider").get(0).value;
        $("#volumeSlider").get(0).value = 0;
    }
});

audioTrack.on("playing", function () { playhead.get(0).max = audioTrack.get(0).duration; }, false);
audioTrack.on("timeupdate", function () {
    $("#progress").val($("#audiotrack").get(0).currentTime);
    var s = parseInt($("#audiotrack").get(0).currentTime % 60);
    var m = parseInt(($("#audiotrack").get(0).currentTime / 60) % 60);
    s = (s >= 10) ? s : "0" + s;
    m = (m >= 10) ? m : "0" + m;
    $("#playbacktime").eq(0).html(m + ":" + s);
});
audioTrack.on("ended", finish());
