


function getColorScheme(seedColorHex, colorScheme) {
  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColorHex}&mode=${colorScheme}&count=5`)
      .then(res => res.json())
      .then(data => {
      document.getElementById("color1").style.backgroundColor = data.colors[0].hex.value
      document.getElementById("color2").style.backgroundColor = data.colors[1].hex.value
      document.getElementById("color3").style.backgroundColor = data.colors[2].hex.value
      document.getElementById("color4").style.backgroundColor = data.colors[3].hex.value
      document.getElementById("color5").style.backgroundColor = data.colors[4].hex.value
      
      document.getElementById("value1").textContent = data.colors[0].hex.value
      document.getElementById("value2").textContent = data.colors[1].hex.value
      document.getElementById("value3").textContent = data.colors[2].hex.value
      document.getElementById("value4").textContent = data.colors[3].hex.value
      document.getElementById("value5").textContent = data.colors[4].hex.value
      })
}

  document.getElementById("color-scheme-btn").addEventListener("click", (event) => {
      event.preventDefault()
      const colorScheme = document.getElementById("color-scheme").value
      const seedColorHex = document.getElementById("seed-color").value.replace('#', '')
      
      getColorScheme(seedColorHex, colorScheme)
  })
