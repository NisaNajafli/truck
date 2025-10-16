document.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    speed: 1200,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init: function () {
        updateSlideCounter(this);
        animateProgress();
      },
      slideChange: function () {
        updateSlideCounter(this);
        resetProgress();
        animateProgress();
      },
    },
  });

  // Custom buttons
  document.querySelector('.nav-next').addEventListener('click', () => heroSwiper.slideNext());
  document.querySelector('.nav-prev').addEventListener('click', () => heroSwiper.slidePrev());

  // Counter and progress logic
  const totalSlides = document.querySelector('.total-slides');
  totalSlides.textContent = String(heroSwiper.slides.length - 2).padStart(2, '0'); // exclude duplicates

  function updateSlideCounter(swiper) {
    const current = swiper.realIndex + 1;
    document.querySelector('.current-slide').textContent = String(current).padStart(2, '0');
  }

  function animateProgress() {
    const bar = document.querySelector('.progress-bar span');
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 4s linear';
      bar.style.width = '100%';
    }, 50);
  }

  function resetProgress() {
    const bar = document.querySelector('.progress-bar span');
    bar.style.transition = 'none';
    bar.style.width = '0%';
  }
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");

    header.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        faqItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      }
    });
  });
});

