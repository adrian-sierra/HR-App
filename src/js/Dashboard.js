const nav_icon = document.getElementById("nav-icon");
const links_element = document.getElementById("links-element");
const time_element = document.getElementById("time");
const date_element = document.getElementById("date");
const punch_buttons = document.querySelectorAll(".punch-btn");

// FOR MOBILE NAV
nav_icon.addEventListener("click", () => {
  if (nav_icon.dataset.icon === "open") {
    nav_icon.dataset.icon = "close";
    links_element.style.display = "grid";
  } else {
    nav_icon.dataset.icon = "open";
    links_element.style.display = "none";
  }
});
let currentDate, currentTime;
function updateDateTime() {
  const now = new Date();
  // get the current date and time as a string
  currentDate = now.toLocaleDateString();
  currentTime = now.toLocaleTimeString();
  date_element.textContent = currentDate;
  time_element.textContent = currentTime;
}
// call the `updateDateTime` function every second
updateDateTime();
setInterval(updateDateTime, 1000);

punch_buttons.forEach((button) =>
  button.addEventListener("click", () => {
    console.log(currentDate + " " + currentTime);
  })
);
