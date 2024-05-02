const nav_icon = document.getElementById("nav-icon");
const links_element = document.getElementById("links-element");

nav_icon.addEventListener("click", () => {
  if (nav_icon.dataset.icon === "open") {
    nav_icon.dataset.icon = "close";
    links_element.classList.remove("hide");
    links_element.classList.remove("mobile-hide");
  } else {
    nav_icon.dataset.icon = "open";
    links_element.classList.add("hide");
    links_element.classList.add("mobile-hide");
  }
});

const edit_titles = document.querySelectorAll(".entry-titles");
function removeTitles() {
  for (let i = 0; i < edit_titles.length; i++) {
    edit_titles[i].classList.add("hide");
  }
}
function addTitles() {
  for (let i = 0; i < edit_titles.length; i++) {
    if (edit_titles[i].classList.contains("hide")) {
      edit_titles[i].classList.remove("hide");
    }
  }
}
const edit_entries = document.querySelectorAll(".timesheet__entry");
function removeEntries(idx) {
  for (let i = 0; i < edit_buttons.length; i++) {
    if (i != idx) {
      edit_entries[i].classList.add("hide");
    }
  }
}
function addEntries() {
  for (let i = 0; i < edit_entries.length; i++) {
    if (edit_entries[i].classList.contains("hide")) {
      edit_entries[i].classList.remove("hide");
    }
  }
}

const form_date = document.getElementById("form-date");
const form_type = document.getElementById("form-type");
const form_time = document.getElementById("form-time");
function insertData(date) {
  form_date.valueAsDate = date;
  form_type.value = "lunch-out";
}
function removeData() {
  form_date.value = "";
  form_type.value = "";
}

const edit_buttons = document.querySelectorAll(".entry__edit");
const edit_dates = document.querySelectorAll(".entry-date");
const go_back_button = document.getElementById("go-back-btn");
for (let i = 0; i < edit_buttons.length; i++) {
  edit_buttons[i].addEventListener("click", () => {
    // console.log(edit_dates[i].textContent);
    removeEntries(i);
    removeTitles();
    insertData(edit_dates[i].textContent);
    go_back_button.classList.remove("hide");
  });
}

go_back_button.addEventListener("click", () => {
  addTitles();
  addEntries();
  removeData();
  go_back_button.classList.add("hide");
});
