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
const card_containers = document.querySelectorAll(".card");
function resetPrevious(tab, card) {
  tab.classList.remove("active");
  card.classList.add("hide");
  // tab.classList.add("hide");
}
function currentTab(tab) {
  console.log(tab);
}
function assignTab(tab, card) {
  tab.classList.add("active");
  card.classList.remove("hide");
  // tab.classList.remove("hide");
}
function newTab(tab, card) {
  console.log("clicked tab: " + tab);
  console.log("currently active tab: " + activeTab());
  if (activeTab() != false) {
    resetPrevious(activeTab(), card);
    assignTab(tab, card);
  } else {
    assignTab(tab, card);
  }
}
const card_items = document.querySelectorAll(".card-item");
function activeTab() {
  for (let i = 0; i < card_items.length; i++) {
    if (card_items[i].classList.contains("active")) {
      return card_items[i];
    }
  }
  return false;
}

for (let i = 0; i < card_items.length; i++) {
  card_items[i].addEventListener("click", () => {
    // card_items[i].classList.toggle("active");
    // card_containers[i].classList.toggle("hide");
    // let currentTab = card_items[i];
    console.log(card_containers[i]);
    newTab(card_items[i], card_containers[i]);
  });
}
const item_subsets = document.querySelectorAll(".item-subset");
const subset_containers = document.querySelectorAll(".subset-container");
let subset_content;
for (let i = 0; i < item_subsets.length; i++) {
  item_subsets[i].addEventListener("click", () => {
    subset_content = document.querySelectorAll(".subset-content");
    subset_content[i].classList.toggle("hide");
    item_subsets[i].classList.toggle("active");
  });
}
