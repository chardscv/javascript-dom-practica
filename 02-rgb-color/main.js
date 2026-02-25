const pRed = document.getElementById('text-red')
const pGreen = document.getElementById('text-green')
const pBlue = document.getElementById('text-blue')

const inputRed = document.getElementById('red')
const inputGreen = document.getElementById('green')
const inputBlue = document.getElementById('blue')

let red = inputRed.value
let green = inputGreen.value
let blue = inputBlue.value

pRed.textContent = red
pGreen.textContent = green
pBlue.textContent = blue

inputRed.addEventListener('input', (e)=> {
  red = e.target.value
  pRed.textContent = red
  changeColor(red, green, blue)
})

inputGreen.addEventListener('input', (e)=> {
  green = e.target.value
  pGreen.textContent = green
  changeColor(red, green, blue)
})

inputBlue.addEventListener('input', (e)=> {
  blue = e.target.value
  pBlue.textContent = blue
  changeColor(red, green, blue)
})

function changeColor(red, green, blue) {
  let colorRGB = `rgb(${red},${green},${blue})`
  document.body.style.backgroundColor = colorRGB
}
