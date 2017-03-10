/**
 * Created by ugurcem on 08/03/2017.
 */
/*
 *
 * *** Node-Cron Yazim Bicimi ***

 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
 */


/*
 * Islemler burada gerceklesir.
 *
 * 1-) Once getSchedule() fonksiyonu firebase'e baglanip, icerisine manuel olarak Monday girdigim haftanin gununun degerini
 * alir. Cekilen deger buradaki schedule degiskenine atanir.
 *
 * 2-) Sonra node-cron fotmatindaki bu deger, startJob() fonksiyonuna gonderilerek isin zamani verilip calistirilir.
 * 
 * */
var crn = require('../back-end/cronJob/cron-job.js');
var sch = require('../back-end/firebase-read/scheduleRead.js');

var schedule = sch.getSchedule();
crn.startJob(schedule);
