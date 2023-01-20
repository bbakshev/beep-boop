// Business Logic

function beepBoop(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    let lastDigit = i % 10;
        if(lastDigit === 1) {
            numArray.push("Beep!");
        } else if(lastDigit === 2) {
            numArray.push("Boop!");
        } else if(lastDigit === 3) {
            numArray.push("Won't you be my neighbor?");
        } else {
            numArray.push(i);
        }
    }
    return numArray;
}

// UI Logic
function handleForm(event) {
  event.preventDefault();

  const input = document.getElementById("number").value;
  const result = beepBoop(input);

  document.getElementById("result").innerText = result;
}


window.addEventListener("load", function () {
  document.getElementById("word-counter").addEventListener("submit", handleForm);
});