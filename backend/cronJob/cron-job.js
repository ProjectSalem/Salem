var CronJob = require('cron').CronJob; // for Scheduled Jobs
var jstz = require('jstimezonedetect');
var timezone = jstz.determine().name(); // returns the timezone of working machine.
var board_led = require('../led/led');

var schedule = ""; // Buraya firebase'den alinan deger atanacak.


var job = new CronJob(schedule, function () {

        console.log("Job started.");
        board_led.blinkLed(); // ledi yak.

    }, function () {
        console.log("Job Finished.");
    },
    false, /* Start the job right now */
    timezone /* Time zone of this job. */
);
var startJob = function (sch) {
    schedule = sch;
    job.start();
};

module.exports.startJob = startJob;

