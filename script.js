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

const focusEffects = (function () {
  let hoverItems = document.querySelectorAll(".hover-item");

  const removeFocusEffect = () => {
    hoverItems.forEach(item => {
      item.classList.remove("hoverItemBorder");
    })
  }

  (function addFocusEffect() {
    hoverItems.forEach(item => {
      item.addEventListener("click", () => {
        removeFocusEffect();
        item.classList.add("hoverItemBorder");
      })
    })
  })();

  return {remove: removeFocusEffect};
})();

const dropdown  = (function () {
  let dropdowns = document.querySelectorAll(".dropdown");
  let dropContent = document.querySelectorAll(".drop-content");

  function hideDropdowns() {
    dropContent.forEach(element => {
      element.classList.add("viewHidden");
    })
  }

  (function toggleDropdown() {
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", () => {
        if ([...dropContent].some(element => !element.matches("viewHidden")) && dropContent[i].classList.contains("viewHidden")) {
          hideDropdowns();
          dropContent[i].classList.toggle("viewHidden");
        } else {
          dropContent[i].classList.toggle("viewHidden")
        }
      })
    }
  })();

  (function hideIfClickAway() {
    window.addEventListener("click", e => {
      if (!e.target.matches("header, header *")) hideDropdowns();
      if (!e.target.matches(".dropdown")) focusEffects.remove();
   })
  })();
})();

// 1. Click on ".dropdown[i]" => dropdownActive => forEach ".drop-content" Add ".viewHidden" => Toggle ".drop-content[i]"
// 2. Click on ".dropdown[i]" => !dropdownActive => Toggle ".drop-content[i]"
