const nav_icon = document.getElementById("nav-icon");
const links_element = document.getElementById("links-element");
const current_week = document.getElementById("entry-week");

nav_icon.addEventListener("click", () => {
  if (nav_icon.dataset.icon === "open") {
    nav_icon.dataset.icon = "close";
    links_element.classList.remove("hide");
  } else {
    nav_icon.dataset.icon = "open";
    links_element.classList.add("hide");
  }
});

function getMondayOfCurrentWeek() {
  let fullDate = "";
  let d = new Date();
  let starting_week = d.getDate() - d.getDay();
  if (starting_week < 0) {
    let num_days_in_month = new Date(
      d.getFullYear(),
      d.getMonth(),
      0
    ).getDate();
    starting_week += num_days_in_month;
    return (
      fullDate + d.getMonth() + "/" + starting_week + "/" + d.getFullYear()
    );
  } else {
    return (
      fullDate +
      (d.getMonth() + 1) +
      "/" +
      starting_week +
      "/" +
      d.getFullYear()
    );
  }
}
current_week.textContent = getMondayOfCurrentWeek();
