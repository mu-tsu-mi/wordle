
const instructionButton = document.getElementById("instruction-button")
const playButton = document.getElementById("play-button")
const instructions = document.querySelector(".instructions")
 
instructionButton.addEventListener("click", function(event) {
    event.preventDefault()
    instructions.style.display = "block"
})

playButton.addEventListener("click", function(event) {
    event.preventDefault()
    instructions.style.display = "none"
})

