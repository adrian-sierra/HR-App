const nav_icon = document.getElementById("nav-icon");
const links_element = document.getElementById("links-element");

nav_icon.addEventListener("click", () => {
  if (nav_icon.dataset.icon === "open") {
    nav_icon.dataset.icon = "close";
    links_element.classList.remove("hide");
  } else {
    nav_icon.dataset.icon = "open";
    links_element.classList.add("hide");
  }
});

const edit_titles = document.querySelectorAll(".entry-titles");
function removeTitles() {
  for (let i = 0; i < edit_titles.length; i++) {
    edit_titles[i].classList.add("hide");
  }
}
const edit_entries = document.querySelectorAll(".entry");
function removeButtons(idx) {
  for (let i = 0; i < edit_buttons.length; i++) {
    if (i != idx) {
      edit_entries[i].classList.add("hide");
    }
  }
}
const form_date = document.getElementById("form-date");
const form_type = document.getElementById("form-type");
const form_time = document.getElementById("form-time");
function insertData() {
  form_date.valueAsDate = "1/4/2024";
  form_type.value = "clock-out";
}
const edit_buttons = document.querySelectorAll(".edit-entry");
for (let i = 0; i < edit_buttons.length; i++) {
  edit_buttons[i].addEventListener("click", () => {
    removeButtons(i);
    removeTitles();
    insertData();
  });
}
