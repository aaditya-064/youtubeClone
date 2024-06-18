$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 6,
    margin: 10,
    autoWidth: true,
    dragEndSpeed: true,
  });
});

var owl = $(".owl-carousel");
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});

const menuButton = document.querySelector("#menuButton")

menuButton.addEventListener('click', ()=>{
  
})
