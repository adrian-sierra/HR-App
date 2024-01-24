const nav_icon = document.getElementById("nav-icon");
const links_element = document.getElementById("links-element");
const calc_button = document.getElementById("calculation-button");

nav_icon.addEventListener("click", () => {
  if (nav_icon.dataset.icon === "open") {
    nav_icon.dataset.icon = "close";
    links_element.classList.remove("hide");
  } else {
    nav_icon.dataset.icon = "open";
    links_element.classList.add("hide");
  }
});

const gross_result = document.getElementById("gross-number");
const net_result = document.getElementById("net-number");
function calcTotal() {
  const check_inputs = document.querySelectorAll(".form-input");
  let total_hours = parseFloat(check_inputs[0].value);
  const total_ot = parseFloat(check_inputs[1].value);
  const hourly_rate = parseFloat(check_inputs[2].value);
  let gross_total = 0;
  let net_total;
  if (total_ot > 0) {
    total_hours += total_ot * 1.5;
    gross_total += total_hours * hourly_rate;
  } else {
    gross_total += total_hours * hourly_rate;
  }
  net_total = (gross_total * 0.72).toFixed(2);
  gross_total = gross_total.toFixed(2);
  gross_result.textContent = "$" + gross_total;
  net_result.textContent = "$" + net_total;
}

calc_button.addEventListener("click", calcTotal);
