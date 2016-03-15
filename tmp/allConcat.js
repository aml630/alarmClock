
var Alarm = require('./../js/alarm.js').Alarm;




$(document).ready(function() {

  $(document).ready(function update_time() {
    $('#time').text(moment().format("HH:mm"));
    setTimeout(update_time, 1000);
  });

    function update_time_slow() {
      setTimeout(update_time_slow, 100);
      if (newAlarmTime === consoleTime.text()) {
        $(".printOut").append("<li>"+"WakeUp"+"</li>");
      }
    }



  var consoleTime = $('#time').text(moment().format("HH:mm"));

  var newAlarmTime = "blank Time";


    $(".alarmSet").submit(function () {
      event.preventDefault();
      newAlarmTime = $(".alarmTime").val();
      console.log(newAlarmTime);
      console.log(consoleTime.text());
    $(".printOut").append("<li> Your alarm is set for "+newAlarmTime+"</li>");
    if (newAlarmTime === consoleTime.text()) {
      $(".printOut").append("<li>"+"WakeUp"+"</li>");
    }

    });



});
