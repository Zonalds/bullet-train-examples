//Intialise Bullet Train

var updateDOM = function () {
    console.log("Received flags", bulletTrain.getAllFlags())

    $("#loaded").removeClass("hidden");
    $("#loading").addClass("hidden");

    var hasInstantMessaging = bulletTrain.hasFeature('instant_messaging');
    if (hasInstantMessaging) {
        $("#instant_messaging").removeClass("hidden");
        $("#no_instant_messaging").addClass("hidden");
     } else {
        $("#instant_messaging").addClass("hidden");
        $("#no_instant_messaging").removeClass("hidden");
    }
    $(".bt_font_size").css("font-size",bulletTrain.getValue("font_size")+"px")
}


$(document).ready(function () {
    const environmentID = 'QjgYur4LQTwe5HpvbvhpzK'
    bulletTrain.init({
        environmentID: environmentID,
        defaultFlags: {
            font_size: 10
        },
        onChange: updateDOM
    });
});