window.addEventListener("load", function () {
  const pathname = window.location.pathname.split("/");
  var navElement = document.getElementById("navigation");
  var navElementM = document.getElementById("navigationMobile");
  Array.from(navElement.children).forEach((element) => {
    if (element.children[0].getAttribute("href") === pathname.at(-1)) {
      element.children[0].classList.add("activeNav");
    } else {
      element.children[0].classList.remove("activeNav");
    }
  });
  Array.from(navElementM.children).forEach((element) => {
    if (element.children[0].getAttribute("href") === pathname.at(-1)) {
      element.children[0].classList.add("activeNav");
    } else {
      element.children[0].classList.remove("activeNav");
    }
  });
});
