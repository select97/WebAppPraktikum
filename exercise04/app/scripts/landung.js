function simulation() {
    var v = -1000;
    var s = 50000;
    var fuel = 10000;
    var schub = false;

    function a() {
        if (schub == false || fuel <= 0)
            return -1.63;
        else {
            fuel = fuel - 100;
            return -1.63 + 12;
        }
    }

    function switchOn() {
        schub = true;
        update();
    }

    var switchOff = function () {
        schub = false;
        update();
    }

    function switchOff2() {
        schub = false;
        update();
    }

    function update() {
        v = v + a();
        s = s + v;
        $("#height").html("Höhe: " + s + " m");
        $("#speed").html("Geschwindigkeit: " + v + " m/s");
        $("#fuel").html("Treibstoff: " + fuel + " l");
    }

    $("#content").html("<h2>Mondlandung</h2>");
    $("#content").append("<div id='height'>Höhe: </div>");
    $("#content").append("<div id='speed'>Geschwindigkeit: </div>");
    $("#content").append("<div id='fuel'>Treibstoffvorrat: </div>");
    $("#content").append("<button id='energy' class='btn-style'>Triebwerk an</button>");
    $("#content").append("<button id='no-energy' class='btn-style'>Triebwerk aus</button>");

    $("#energy").click(switchOn);
    $("#no-energy").click(switchOff);
}

//$(document).ready(simulation);

