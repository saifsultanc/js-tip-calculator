document.getElementById("calculate").addEventListener("click", calculateTip);

function calculateTip() {
  // get all inputs
  let tip = document.getElementById("totalTip");
  let billAmount = document.getElementById("billamt").value;
  let people = document.getElementById("peopleamt").value;
  let serviceOptions = document.getElementsByName("service");
  let service;
  for (let i = 0; i < serviceOptions.length; i++) {
    if (serviceOptions[i].checked) {
      service = serviceOptions[i].value;
    }
  }

  // print error message if invalid input
  if (invalidInput(billAmount) || invalidInput(people)) {
    let error = document.getElementById("error");
    error.classList.add("error-show");
    tip.innerHTML = `$ 0.00 each`;
    setTimeout(() => {
      error.classList.remove("error-show");
    }, 3000);
  }
  // print the tip amount when all input is available
  else {
    let tipAmount = (billAmount * service) / people;
    tipAmount = tipAmount.toFixed(2);

    tip.innerHTML = `$ ${tipAmount} each`;
  }
}

// function to check for invalid input
function invalidInput(data) {
  return data.length === 0 || data < 0;
}
