window.addEventListener("load", function () {
  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", function (e) {
    AmagiLoader.show();
    e.preventDefault();
    const data = new FormData(contactForm);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then((a) => {
      AmagiLoader.hide();
      if (a?.statusText === "OK" || a?.status === 200) {
        contactForm?.reset();
        alert("Form submitted successfully");
      } else {
        alert("An Error occured please try again");
      }
    });
  });
});

function getTimeDifference(start, end) {
  var duration = moment.duration(moment(end).diff(moment(start)));
  var days = duration.asDays().toFixed(0);
  var hours = duration.hours();
  var minutes = duration.minutes();
  var seconds = duration.seconds();

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function viewImage(id) {
  document.getElementById(id).click();
}
