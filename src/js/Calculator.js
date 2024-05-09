const nav_icon = document.getElementById("nav-icon");
const links_element = document.getElementById("links-element");
const calc_button = document.getElementById("calculation-button");

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

function checkEmptyFields(inputs) {
  let error = false;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "" && i != 1) {
      inputs[i].classList.add("error");
      error = true;
    } else {
      if (inputs[i].classList.contains("error")) {
        inputs[i].classList.remove("error");
      }
    }
  }
  return error;
}
function clearPreviousAnswers() {
  gross_result.textContent = "";
  net_result.textContent = "";
}

function displayCheck(regular, OT, rate) {
  let gross_total = 0;
  let net_total;
  if (OT > 0) {
    regular += OT * 1.5;
    gross_total += regular * rate;
  } else {
    gross_total += regular * rate;
  }
  net_total = (gross_total * 0.72).toFixed(2);
  gross_total = gross_total.toFixed(2);
  gross_result.textContent = "$" + gross_total;
  net_result.textContent = "$" + net_total;
}

const gross_result = document.getElementById("gross-number");
const net_result = document.getElementById("net-number");
function calcProcess() {
  clearPreviousAnswers();
  const check_inputs = document.querySelectorAll(".form-input");
  // console.log(check_inputs);
  if (!checkEmptyFields(check_inputs)) {
    displayCheck(
      parseFloat(check_inputs[0].value),
      parseFloat(check_inputs[1].value),
      parseFloat(check_inputs[2].value)
    );
  }
}

calc_button.addEventListener("click", calcProcess);
