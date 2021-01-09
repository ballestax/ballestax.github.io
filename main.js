document.querySelector('.nav-menu-btn').addEventListener('click', () =>{
	document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.carta');
ScrollReveal().reveal('.carta__product', { delay: 500 });
