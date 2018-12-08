var toggleButton = document.getElementById("g-toggle");
var navList = document.getElementById("g-navlist");
var now = new Date().getHours();

hljs.initHighlightingOnLoad();

window.addEventListener(
  "DOMContentLoaded",
  function() {
    if (now >= 20 || now <= 6) {
      toggleDarkMode();
    }
  },
  false
);

if (toggleButton && navList) {
  toggleButton.addEventListener("click", function() {
    navList.classList.toggle("nav-list-show");
  });
  window.addEventListener("click", function(event) {
    if (event.target !== toggleButton) {
      navList.classList.remove("nav-list-show");
    }
  });
}

function toggleDarkMode() {
  var cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.href = "/css/dark.css";
  document.head.appendChild(cssLink);
}
