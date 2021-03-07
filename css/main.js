
document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.banner');
ScrollReveal().reveal('.presentation', {delay: 500});
ScrollReveal().reveal('.xp-first', {delay: 500});
ScrollReveal().reveal('.xp-last', {delay: 500});
ScrollReveal().reveal('.work-in-p', {delay: 500});