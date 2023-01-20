// Business Logic

function beepBoop(number){
  let numArray = number.toString().split("");
  for (let i = 0; i < numArray.length; i++){
    if (numArray[i] === "1") {
      numArray[i] = "Beep!";
    }
  }
  return numArray;
}

// UI Logic
function handleForm(event) {
  event.preventDefault();
}