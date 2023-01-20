// Business Logic

function beepBoop(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString() === "1") {
      numArray.push("Beep!")
    } else if (i.toString() === "2") {
      numArray.push("Boop!")
    } else if (i.toString() === "3") {
      numArray.push("Won't you be my neighbor?")
    } else {
      numArray.push(i);
    }
  }
  return numArray;
}

// UI Logic
function handleForm(event) {
  event.preventDefault();
}