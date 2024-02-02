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
function newTab(tab, card, type) {
  if (type === "header") {
    if (activeHeaderTab() != false) {
      let [currentTab, currentCard] = activeHeaderTab();
      resetPrevious(currentTab, currentCard);
      assignTab(tab, card);
    } else {
      assignTab(tab, card);
    }
  } else {
    if (activeSubTab() != false) {
      let [currentTab, currentCard] = activeSubTab();
      resetPrevious(currentTab, currentCard);
      assignTab(tab, card);
    } else {
      assignTab(tab, card);
    }
  }
}
function activeHeaderTab() {
  for (let i = 0; i < card_items.length; i++) {
    if (card_items[i].classList.contains("active")) {
      return [card_items[i], card_containers[i]];
    }
  }
  return false;
}
function activeSubTab() {
  for (let i = 0; i < sub_card_items.length; i++) {
    if (sub_card_items[i].classList.contains("active")) {
      return [sub_card_items[i], sub_card_containers[i]];
    }
  }
  return false;
}
function resetSubTabs() {
  for (let i = 0; i < sub_card_items.length; i++) {
    if (sub_card_items[i].classList.contains("active")) {
      sub_card_items[i].classList.remove("active");
      sub_card_containers[i].classList.add("hide");
    }
  }
}
const card_items = document.querySelectorAll(".card-item");
const card_containers = document.querySelectorAll(".card");
for (let i = 0; i < card_items.length; i++) {
  card_items[i].addEventListener("click", () => {
    if (activeHeaderTab() != false) {
      let [currentTab, currentCard] = activeHeaderTab();
      if (card_items[i] != currentTab) {
        resetSubTabs();
      }
    }
    newTab(card_items[i], card_containers[i], "header");
  });
}

const sub_card_items = document.querySelectorAll(".sub-card-item");
const sub_card_containers = document.querySelectorAll(".sub-card");
for (let i = 0; i < sub_card_items.length; i++) {
  sub_card_items[i].addEventListener("click", () => {
    newTab(sub_card_items[i], sub_card_containers[i], "sub");
  });
}
