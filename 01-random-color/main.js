const color = document.getElementById('color')
const colorHex = document.getElementById('colorHex')
const button = document.getElementById('button')

function generateColor() {
  let colorHexadecimal = "#"

  let number = Math.floor(Math.random() * 16777216 )
  let hex = number.toString(16)
  console.log(hex)

  if (hex.length < 6 ){
    colorHexadecimal += hex.padStart(6,"0")
    console.log(colorHexadecimal)
    return colorHexadecimal
  }

  colorHexadecimal += hex
  console.log(colorHexadecimal)
  return colorHexadecimal
}

button.addEventListener('click', () => {
  let newColor = generateColor()

  color.style.backgroundColor = newColor
  colorHex.textContent = newColor
})
