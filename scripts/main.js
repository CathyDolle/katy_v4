var img = document.querySelectorAll(".picture-js")
let zoomImg = document.querySelector(".zoomImg-js")
let zoom = document.querySelector(".zoom-js")
let prev = document.querySelector(".prev-js")
let next = document.querySelector(".next-js")
let close = document.querySelector(".close-js")
let blue = document.querySelector(".blue-js")
let pink = document.querySelector(".pink-js")
let purple = document.querySelector(".purple-js")
let dark = document.querySelector(".dark-js")
var pos = 0

// THEME

purple.addEventListener("click", () => {
  document.documentElement.removeAttribute("data-theme", "pink", "blue", "dark")
  localStorage.removeItem("data-theme")
})

pink.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "pink")
  localStorage.setItem("data-theme", "pink")
})

blue.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "blue")
  localStorage.setItem("data-theme", "blue")
})

dark.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "dark")
  localStorage.setItem("data-theme", "dark")
})

// FULLSCREEN

for (var i = 0; i < img.length; i++) {
  ;(function(index) {
    img[index].addEventListener("click", function() {
      zoom.classList.remove("hidden")
      zoomImg.src = img[index].src
      pos = index
    })
  })(i)
}

// EVENT ON CLICK
close.addEventListener("click", minimScreen)
next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)
window.addEventListener("keyup", event => {
  if (event.key == "ArrowRight") {
    nextSlide()
  } else if (event.key == "ArrowLeft") {
    prevSlide()
  } else if (event.key == "Escape") {
    minimScreen()
  }
})

// MINIM SCREEN
function minimScreen() {
  zoom.classList.add("hidden")
}

// PREV SLIDE
function prevSlide() {
  if (pos === 0) {
    pos = img.length - 1
  } else {
    pos--
  }
  zoomImg.src = img[pos].src
}

// NEXT SLIDE
function nextSlide() {
  pos++
  if (pos == img.length) {
    pos = 0
  }
  zoomImg.src = img[pos].src
}
