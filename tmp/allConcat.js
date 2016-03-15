var Alarm = require('./../js/alarm.js').Alarm;




$(document).ready(function() {

  $(document).ready(function update_time() {

    $('#time').text(moment().format("h:m:ss"));
    setTimeout(update_time, 1000);
  });

    var consoleTime = $('#time').text(moment().format("h:m:ss"));
    console.log(consoleTime);

    var newAlarmTime = "blank Time";

    $(".alarmSet").submit(function () {
      event.preventDefault();
      newAlarmTime = $(".alarmTime").val();
      console.log(newAlarmTime);
    $(".printOut").append("<li> Your alarm is set for"+newAlarmTime+"</li>");
    });

    var currentTime = $("#time").text();
    if (newAlarmTime === currentTime) {
      alert("hey wake the heck up");
    }
});
