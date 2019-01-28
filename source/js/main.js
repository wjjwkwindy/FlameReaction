var toggleButton = document.getElementById('g-toggle');
var navList = document.getElementById('g-navlist');

hljs.initHighlightingOnLoad();

if (toggleButton && navList) {
  toggleButton.addEventListener('click', function() {
    navList.classList.toggle('nav-list-show');
  });
  window.addEventListener('click', function(event) {
    if (event.target !== toggleButton) {
      navList.classList.remove('nav-list-show');
    }
  });
}

// Remove Loading Animation when page is load.
window.addEventListener('load', function(event) {
  document.getElementById('loader').style.display = 'none';
});
