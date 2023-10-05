//Scroll reveal
window.sr = ScrollReveal();
sr.reveal(".reveal", { duration: 6000 });

(function () {
  "use strict";

  let items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Fermer le menu mobile lorsqu'on clique en dehors du menu
  document.addEventListener("click", function (event) {
    const target = event.target;
    const isMenuIcon =
      target === mobileMenuIcon || mobileMenuIcon.contains(target);
    const isMenuContent = target === mobileMenu || mobileMenu.contains(target);

    if (!isMenuIcon && !isMenuContent) {
      mobileMenu.classList.remove("active");
    }
  });

  // Fermer le menu mobile lorsqu'on clique sur un lien
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  });

  mobileMenuIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopButton = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const scrollToTopButton = document.querySelector('.scroll-to-top');
scrollToTopButton.addEventListener('click', scrollToTop);
