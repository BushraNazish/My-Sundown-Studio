const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function page4Animation() {
  var elemC = document.querySelector("#elem-container")
  var fixed = document.querySelector("#fixed-image")
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
  })
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
  })

  var elems = document.querySelectorAll(".elem")
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image")
      fixed.style.backgroundImage = `url(${image})`
    })
  })

}

function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
    loader.style.top = "-100%"
  }, 4200)
}




var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
menu.addEventListener("click", function () {
  full.style.top = 0
})


page4Animation()
loaderAnimation()


// function swiperAnimation() {
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 50,
//   });
// }

// swiperAnimation()





// Read --> template literals