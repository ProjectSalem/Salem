var Firebase = require("firebase");
var five = require("johnny-five");

// Create a new reference of Firebase db
var firebaseRef = new Firebase(
    // fictional URL, replace it with your own from Firebase
    "https://salem-1cfea.firebaseio.com/pot"
);

five.Board().on("ready", function () {


    // Create a new pot instance
    var pot = new five.Sensor({
        pin: "A0",
        freq: 250
    });


    // Listen on data change
    pot.on("data", function () {

        var self = this.value;
        // Print pot value

        // Adjusting color brightness conditionally based on
        // the location of the pot output value.
        firebaseRef.set({"data": self});
    });
});
