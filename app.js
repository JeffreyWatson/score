let plus = 0
let add = 0
let reset = 0



function addHome() {
  let homeElem = document.getElementById("plus")
  plus++
  console.log(plus);
  homeElem.innerText = plus
}

function addAway() {
  let awayElem = document.getElementById("add")
  add++
  console.log(add);
  awayElem.innerText = add
}

function resetScore() {
  let resetElem = document.getElementById("reset")
  reset
  console.log(reset);
  resetElem.innerText = reset
}



















// function minusScore() {
//   let plus = document.getElementById("Plus")
//   let minus = document.getElementById("Minus")
//   minus--
//   console.log(minus);
// }
// minusScore()


// function resetScore() {

//   let reset = 0
//   console.log(reset);
// }
// resetScore()