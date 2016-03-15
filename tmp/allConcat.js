var Alarm = require('./../js/alarm.js').Alarm;




$(document).ready(function() {

  $(document).ready(function update_time() {
    $('#time').text(moment().format("h:mm"));
    setTimeout(update_time, 1000);



    if (newAlarmTime === consoleTime.text()) {
      alert("hey wake the heck up");
    }
  });

  var consoleTime = $('#time').text(moment().format("h:m"));

  var newAlarmTime = "blank Time";


    $(".alarmSet").submit(function () {
      event.preventDefault();
      newAlarmTime = $(".alarmTime").val();
      console.log(newAlarmTime);
      console.log(consoleTime.text());
    $(".printOut").append("<li> Your alarm is set for "+newAlarmTime+"</li>");
    //
    // if (newAlarmTime === consoleTime.text()) {
    //   alert("hey wake the heck up");
    // }
    });


    // if (newAlarmTime === consoleTime.text()) {
    //   alert("hey wake the heck up");
    // }
});
