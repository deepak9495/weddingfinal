window.addEventListener("load", function () {
    moment.tz.add(
      "Asia/Calcutta|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0"
    );
    moment.tz.link("Asia/Calcutta|Asia/Kolkata");
    const endDate = "2023-09-03T10:30:06+05:30";
    setInterval(function () {
      const startDate = moment().utcOffset("+05:30").format();
      var remainingTime = getTimeDifference(startDate, endDate);
      document.getElementById("daysRemaing").innerHTML = remainingTime?.days;
      document.getElementById("hoursRemaing").innerHTML = remainingTime?.hours;
      document.getElementById("minutesRemaing").innerHTML =
        remainingTime?.minutes;
      document.getElementById("secondsRemaing").innerHTML =
        remainingTime?.seconds;
    }, 1000);
  });