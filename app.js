function page4Animation() {

  var elemC = document.querySelector("#elem-container")
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "none";
});
}
  // Call the function to enable the animation

  




function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });
  }
  function menuAnimation(){
    var menu = document.querySelector("nav h3"); // Fix the query selector
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img")
  var flag = 0
  menu.addEventListener("click", function(){
    if(flag == 0){
        full.style.top = 0;
navimg.style.opacity = 0
flag = 1
full.style.top = 0;
    }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
  });

  }

  swiperAnimation()
  page4Animation()
  menuAnimation()



var loader = document.querySelector("#loader")
  setTimeout(function(){
    loader.style.top = "-100%"
  },4200)





  
  
  
  
  
