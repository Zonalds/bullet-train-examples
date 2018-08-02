//Intialise Bullet Train
const environmentID = 'QjgYur4LQTwe5HpvbvhpzK'
bulletTrain.init({
    environmentID: environmentID,
    defaultFlags: {
        font_size: 10
    },
    onChange: () => {
        document.getElementById("loaded").classList.remove("hidden")
        document.getElementById("loading").classList.add("hidden")

        console.log("Received flags", bulletTrain.getAllFlags())
        var hasInstantMessaging = bulletTrain.hasFeature('instant_messaging');
        if (hasInstantMessaging) {
            document.getElementById("instant_messaging").classList.remove("hidden")
            document.getElementById("no_instant_messaging").classList.add("hidden")
        } else {
            document.getElementById("instant_messaging").classList.add("hidden")
            document.getElementById("no_instant_messaging").classList.remove("hidden")
        }

        const fontSizeElements = document.getElementsByClassName("bt_font_size");
        for (var i = 0; i < fontSizeElements.length; i++) {
            var item = fontSizeElements[i];
            item.style["font-size"] = bulletTrain.getValue("font_size")+"px";
        }
    }
});