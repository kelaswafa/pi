console.log("Hallo")

// pi = 4/1 - 4/3 + 4/5 - ...

let pi = 0
let iter = 0
let piElement = document.getElementById("pi")

function updatePi() {
  iter++
  let operator = iter % 2 == 1 ? 1 : -1
  let penyebut = iter * 2 - 1
  pi += (operator * 4) / penyebut
  piElement.innerText = pi.toString().slice(0, 10)
}

setInterval(updatePi, 10)
