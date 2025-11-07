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

// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   const logoImg = document.querySelector(".logo img");

//   if (window.scrollY > 0) {
//     header.classList.add("scrolled");
//     logoImg.src = "img/logo.webp"; // логотип при скролле
//   } else {
//     header.classList.remove("scrolled");
//     logoImg.src = "img/logoWhite.webp"; // логотип вверху страницы
//   }
// });

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
const tabButtons = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".contact-form");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.target;
    forms.forEach((form) => {
      form.classList.toggle("active", form.id === target);
    });
  });
});
document.querySelectorAll(".custom-select").forEach((select) => {
  const trigger = select.querySelector(".custom-select-trigger");
  const options = select.querySelector(".custom-options");

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".custom-select").forEach((s) => {
      if (s !== select) s.classList.remove("open");
    });
    select.classList.toggle("open");
  });

  options.querySelectorAll(".custom-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      options.querySelectorAll(".custom-option").forEach((o) =>
        o.classList.remove("selected")
      );
      option.classList.add("selected");
      trigger.querySelector("span").textContent = option.textContent;
      select.classList.remove("open");
    });
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".custom-select").forEach((s) =>
    s.classList.remove("open")
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
// ========== MOBILE MENU FUNCTIONALITY ==========
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.close-mobile');

  if (burgerBtn && mobileMenu && overlay && closeBtn) {
    const toggleMenu = () => {
      burgerBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    };

    burgerBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  }
});
