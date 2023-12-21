(function logoHoverEffect() {
  let logo = document.querySelector("#logo");
  let subElements = document.querySelectorAll("#logo *")

  logo.addEventListener("mouseenter", () => {
    subElements.forEach(element => element.classList.add("fill-dark"));
  })
  
  logo.addEventListener("mouseleave", () => {
    subElements.forEach(element => element.classList.remove("fill-dark"));
  })
})();





(function sectionLinkEffect() {
  const sectionLinks = document.querySelectorAll(".section-link");
  const sectionLinkArrows = document.querySelectorAll(".section-link span");

  for (let i = 0; i < sectionLinks.length; i++) {
    sectionLinks[i].addEventListener("mouseenter", () => {
      sectionLinks[i].classList.add("color-dark");
      sectionLinkArrows[i].classList.add("margin-small");
    })
    sectionLinks[i].addEventListener("mouseleave", () => {
      sectionLinks[i].classList.remove("color-dark");
      sectionLinkArrows[i].classList.remove("margin-small");
    })
  }
})();





(function headerScrollEffect() {
  let header = document.querySelector("header");
  
  document.addEventListener("scroll", () => {
    document.body.scrollTop || document.documentElement.scrollTop === 0 ? 
    header.classList.remove("header-contrasting") : 
    header.classList.add("header-contrasting") ;
  })
})();





const mediaQuery = (function () {
  const desktop = window.matchMedia("(min-width: 1124px)");
  const mobile = window.matchMedia("(max-width: 1124px)");
  
  const toggleBtnHoverEffect = () => {
    mobile.matches ? 
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("hover-affected")) : 
    document.querySelectorAll("nav button").forEach(btn => btn.classList.add("hover-affected")) ;
  };
  
  toggleBtnHoverEffect();
  window.addEventListener("resize", toggleBtnHoverEffect);

  return {desktop, mobile};
})();





const buttonFocusEffect = (function () {
  let dropdownBtns = document.querySelectorAll(".dropdown-btn");
  
  const remove = () => {
    dropdownBtns.forEach(btn => {
      btn.classList.remove("dropdown-btn-border");
    })
  }
  
  (function add() {
    dropdownBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (mediaQuery.desktop.matches) {
          remove();
          btn.classList.add("dropdown-btn-border");
        }
      })
    })
  })();
  
  (function clearForMobile() {
    window.addEventListener("resize", () => {
      if (mediaQuery.mobile.matches) remove();
    })
  })();

  return {remove};
})();





(function toggleMenu() {
  let nav = document.querySelector("nav");
  let menuLabel = document.querySelector("#menu-label");
  
  const openMenu = () => {
    nav.classList.add("display-flex");
    menuLabel.classList.remove("display-none");
  };
  
  const closeMenu = () => {
    nav.classList.remove("display-flex");
    menuLabel.classList.add("display-none");
  };
  
  window.addEventListener("resize", () => {
    if (mediaQuery.desktop.matches) closeMenu();
  })

  document.querySelector("#open-menu").addEventListener("click", openMenu);
  document.querySelector("#close-menu").addEventListener("click", closeMenu);
})();





(function headerDropdownEffects() {
  let dropdownBtns = document.querySelectorAll(".dropdown-btn");
  let dropdowns = document.querySelectorAll(".dropdown");
  let chevrons = document.querySelectorAll(".header-chevron");
  
  function hideDropdowns() {
    dropdowns.forEach(dropdown => {
      dropdown.classList.add("display-none");
    })
  }

  (function toggleDropdown() {
    for (let i = 0; i < dropdownBtns.length; i++) {
      dropdownBtns[i].addEventListener("click", () => {
        if (
          [...dropdowns].some(dropdown => !dropdown.classList.contains("display-none")) && 
          dropdowns[i].classList.contains("display-none")
        ) {
          hideDropdowns();
          chevrons.forEach(chevron => {
            chevron.classList.remove("rotate-180");
          })
        };

        dropdowns[i].classList.toggle("display-none");
        chevrons[i].classList.toggle("rotate-180");
      })
    }
  })();

  (function hideIfClickAway() {
    window.addEventListener("click", e => {
      if (!e.target.matches("header, header *")) {
        hideDropdowns();
        chevrons.forEach(chevron => {
          chevron.classList.remove("rotate-180");
        })
      }
      if (!e.target.matches(".dropdown-btn, .dropdown-btn svg")) buttonFocusEffect.remove();
   })
  })();
})();





(function footerDropdownEffects() {
  let dropdownBtns = document.querySelectorAll(".footer-list-heading");
  let dropdowns = document.querySelectorAll(".footer-list-items");
  let chevrons = document.querySelectorAll(".footer-chevron");

  function hideDropdowns() {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove("display-flex");
    })
  }

  (function toggleDropdown() {
    for (let i = 0; i < dropdownBtns.length; i++) {
      dropdownBtns[i].addEventListener("click", () => {
        if (
          [...dropdowns].some(dropdown => dropdown.classList.contains("display-flex")) && 
          !dropdowns[i].classList.contains("display-flex")
        ) {
          hideDropdowns();
          chevrons.forEach(chevron => {
            chevron.classList.remove("rotate-180");
          })
        };

        dropdowns[i].classList.toggle("display-flex");
        chevrons[i].classList.toggle("rotate-180");
      })
    }
  })();
})();