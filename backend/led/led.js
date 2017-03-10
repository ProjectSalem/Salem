/**
 * Created by ugurcem on 08/03/2017.
 */

// Board status sirayla Device -> Connected -> Repl Initialized oluyo. Init olmadan LED yanmiyo.

var five = require("johnny-five"); // for Arduino R/W
var board = new five.Board();

var blinkLed = function () {

    var led = new five.Led(11);
    // "blink" the led in 500ms on-off phase periods
    led.blink();
    

};
module.exports.blinkLed = blinkLed;
