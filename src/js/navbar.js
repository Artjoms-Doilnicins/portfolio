const hamburgerBtnEl = document.querySelector('.hamburger-btn');
const buttonsSectionMenuEl = document.querySelector('.buttons-section');

hamburgerBtnEl.addEventListener('click', () => {
	buttonsSectionMenuEl.classList.toggle('active');
});
