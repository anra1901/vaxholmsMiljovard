const date = new Date()
const year = date.getFullYear()

const footerText = document.querySelector(".footer__text")
const yearsText = document.createElement("p")
yearsText.textContent = "1993 - " + year
footerText.appendChild(yearsText)