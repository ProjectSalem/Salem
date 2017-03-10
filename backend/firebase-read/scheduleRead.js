/**
 * Created by ugurcem on 06/03/2017.
 */
var firebase = require('firebase'); // for Google firebase implementation
var five = require("johnny-five"); // for Arduino R/W
var schedule = "";
/*
 * Firebase'dan tabloyu okur, ve istenen gunun degerini 'schedule' degiskenine atar.
 * Bu degiskenin formati node-cron formatindadir. Bu degisken cronJob/cron-job.js icinde kullanilacaktir.
 * */

var getSchedule = function () {

    /*
     * firebase conf degerleri. Proje sayfasinda overview section'undan 'Firebase'i web uygulamanıza ekleyin'
     * bolumunden bulunabilir
     */
    const config = {
        apiKey: "AIzaSyCWOOKbpHmkH6Rz40AY1gEXxOJt2_cngoI",
        authDomain: "schedule-a2185.firebaseapp.com",
        databaseURL: "https://schedule-a2185.firebaseio.com",
        storageBucket: "schedule-a2185.appspot.com",
        messagingSenderId: "343764335872"
    };

    /*
     * Database init & read & sync
     * */
    const fb = firebase
        .initializeApp(config)
        .database()
        .ref();

    /*
     * Database'deki degeri okuyup, schedule degiskenine atar. Dikkat: butun tabloyu atar! Ornegin Cuma gununu cekmek
     * icin : schedule.Weekly.Friday olarak cekmek gereklidir. Butun haftayi dictionary olarak cekmek icin schedule.Weekly
     * yeterli. Dondurdugu dict  :  {'Monday': '* * * * *', '* * * * * *', .... } gibi.
     * */

    fb.on('value', snapshot => {
        schedule = snapshot.val().Weekly.Monday;
        return schedule;
    });
};
module.exports.getSchedule = getSchedule;








