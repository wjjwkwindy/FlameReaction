var toggleButton = document.getElementById('g-toggle');
var navList = document.getElementById('g-navlist');

hljs.initHighlightingOnLoad();

toggleButton.addEventListener('click', function () {
    navList.style.display = (navList.style.display == 'none') ? 'block' : 'none';
});

window.addEventListener('click', function (event) {
    if (event.target !== toggleButton) {
        navList.style.display = 'none';
    }
});