// Business Logic

function beepBoop(number) {
  let numArray = number.toString().split("");
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] === "1") {
      numArray[i] = "Beep!";
    } else if (numArray[i] === "2") {
      numArray[i] = "Boop!";
    } else if (numArray[i] === "3") {
      numArray[i] = "Won't you be my neighbor?";
    }
  }
  return numArray;
}

// UI Logic
function handleForm(event) {
  event.preventDefault();
}