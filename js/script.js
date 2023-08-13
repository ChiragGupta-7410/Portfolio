var menu = document.querySelector("nav div.mobile-navbar-btn .mobile-nav-icon");
var closeButton = document.querySelector(
  "body > header > nav > div.container-fluid.mobile-navbar-btn.right > ion-icon:nth-child(2)"
);
var mobileNavbar = document.querySelector("nav div.container-fluid.center");

menu.addEventListener("click", () => {
  mobileNavbar.classList.toggle("open");
  menu.classList.toggle("active");
  closeButton.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  mobileNavbar.classList.toggle("open");
  menu.classList.toggle("active");
  closeButton.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1180) {
    mobileNavbar.classList.remove("open");
    menu.classList.add("active");
    closeButton.classList.remove("active");
  }
});

var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
