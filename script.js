(function logoHoverEffect() {
  let logoPaths = document.querySelectorAll(".logoPath")
  let logo = document.querySelector("#logo");

  logo.addEventListener("mouseenter", () => {
    logoPaths.forEach(path => {
      path.classList.add("logoDarken");
    })
  })
  
  logo.addEventListener("mouseleave", () => {
    logoPaths.forEach(path => {
      path.classList.remove("logoDarken");
    })
  })
})();


const mediaQuery = (function () {
  const desktop = window.matchMedia("(min-width: 1124px)");
  const mobile = window.matchMedia("(max-width: 1124px)");

  return {desktop, mobile};
})();


const focusEffects = (function () {
  let dropdowns = document.querySelectorAll(".dropdown");
  
  const removeFocusEffect = () => {
    dropdowns.forEach(item => {
      if (mediaQuery.desktop.matches) {
        item.classList.remove("hoverItemBorder");
      }
    })
  }
  
  (function clearMobileFocus() {
    window.addEventListener("resize", () => {
      if (mediaQuery.mobile.matches) {
        dropdowns.forEach(item => {
          item.classList.remove("hoverItemBorder");
        })
      }
    })
  })();

  (function addFocusEffect() {
    dropdowns.forEach(item => {
      item.addEventListener("click", () => {
        if (mediaQuery.desktop.matches) {
          removeFocusEffect();
          item.classList.add("hoverItemBorder");
        }
      })
    })
  })();

  return {remove: removeFocusEffect};
})();


const dropdown  = (function () {
  let dropdowns = document.querySelectorAll(".dropdown");
  let dropContent = document.querySelectorAll(".drop-content");

  const chevronEffects = (function () {
    let chevrons = document.querySelectorAll(".icon");

    function rotate(i) {
      chevrons[i].classList.toggle("rotate180");
    }

    function reset() {
      chevrons.forEach(chevron => {
        chevron.classList.remove("rotate180");
      })
    }

    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", () => {
          if ([...dropContent].some(element => !element.matches("viewHidden")) && dropContent[i].classList.contains("viewHidden")) reset();
          rotate(i);
      })
    }

    return {reset}
  })();
  
  function hideDropdowns() {
    dropContent.forEach(element => {
      element.classList.add("viewHidden");
    })
  }

  (function toggleDropdown() {
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", () => {
        if ([...dropContent].some(element => !element.matches("viewHidden")) && dropContent[i].classList.contains("viewHidden")) hideDropdowns();
        dropContent[i].classList.toggle("viewHidden");
      })
    }
  })();

  (function hideIfClickAway() {
    window.addEventListener("click", e => {
      if (!e.target.matches("header, header *")) {
        hideDropdowns();
        chevronEffects.reset();
      }
      if (!e.target.matches(".dropdown, .dropdown svg")) focusEffects.remove();
   })
  })();
})();


(function toggleMenu() {
  let nav = document.querySelector("nav")
  let menuLabel = document.querySelector("#menu-label");
  
  (function closeMenu() {
    let closeIcon = document.querySelector("#close-menu");

    closeIcon.addEventListener("click", () => {
      nav.classList.remove("flexDisplay");
      menuLabel.classList.remove("flexDisplay");
    })
  })();

  (function openMenu() {
    let openBtn = document.querySelector("#menu");

    openBtn.addEventListener("click", () => {
      nav.classList.add("flexDisplay");
      menuLabel.classList.add("flexDisplay");
    })
  })();

  window.addEventListener("resize", () => {
    if (mediaQuery.desktop.matches) {
      menuLabel.classList.remove("flexDisplay");
      nav.classList.remove("flexDisplay");
    }
  })
})();


(function scrollEffects() {
  let header = document.querySelector("header");
  
  document.addEventListener("scroll", () => {
    document.body.scrollTop || document.documentElement.scrollTop === 0 ? header.classList.remove("headerScrollEffect") : header.classList.add("headerScrollEffect") ;
  })
})();