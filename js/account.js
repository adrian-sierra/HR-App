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

const card_items = document.querySelectorAll(".card-item");
const card_containers = document.querySelectorAll(".card");

for (let i = 0; i < card_items.length; i++) {
  card_items[i].addEventListener("click", () => {
    card_items[i].classList.toggle("active");
    card_containers[i].classList.toggle("hide");
  });
}

// card_items.forEach((item) =>
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   })
// );
