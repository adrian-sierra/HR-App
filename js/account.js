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
function resetPrevious(tab, card) {
  tab.classList.remove("active");
  card.classList.add("hide");
}
function assignTab(tab, card) {
  tab.classList.add("active");
  card.classList.remove("hide");
}
function newTab(tab, card) {
  if (activeTab() != false) {
    let [currentTab, currentCard] = activeTab();
    resetPrevious(currentTab, currentCard);
    assignTab(tab, card);
  } else {
    assignTab(tab, card);
  }
}
function activeTab() {
  for (let i = 0; i < card_items.length; i++) {
    if (card_items[i].classList.contains("active")) {
      return [card_items[i], card_containers[i]];
    }
  }
  return false;
}
const card_items = document.querySelectorAll(".card-item");
const card_containers = document.querySelectorAll(".card");
for (let i = 0; i < card_items.length; i++) {
  card_items[i].addEventListener("click", () => {
    newTab(card_items[i], card_containers[i]);
  });
}
function resetContent(subset) {
  subset.classList.remove("active");
}
function assignContent(subset) {
  subset.classList.add("active");
}
function newContent(subset) {
  if (activeContent() != false) {
    resetContent(activeContent());
    assignContent(subset);
  } else {
    assignContent(subset);
  }
}
function activeContent() {
  for (let i = 0; i < item_subsets.length; i++) {
    if (item_subsets[i].classList.contains("active")) {
      return item_subsets[i];
    }
  }
  return false;
}
const item_subsets = document.querySelectorAll(".item-subset");
for (let i = 0; i < item_subsets.length; i++) {
  item_subsets[i].addEventListener("click", () => {
    const subset_content = document.querySelectorAll(".subset-content");
    subset_content[i].classList.toggle("hide");
    // item_subsets[i].classList.toggle("active");
    newContent(item_subsets[i]);
  });
}
