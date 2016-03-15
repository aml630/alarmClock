var Alarm = require('./../js/alarm.js').Alarm;



$(document).ready(function update_time() {


    $('#time').text(moment());
    setTimeout(update_time, 1000);
  
});
