const input = document.querySelector('.input');
const darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
input.checked = darkMode;

const darkModeToggle = () => {
	if (input.checked) {
		document.documentElement.style.setProperty('--dark-mode-bg-color', '#1e1e1e');
		document.documentElement.style.setProperty('--dark-mode-text-color', 'white');
	}
	if (!input.checked) {
		document.documentElement.style.setProperty('--dark-mode-bg-color', 'white');
		document.documentElement.style.setProperty('--dark-mode-text-color', 'black');
	}
};
darkModeToggle();

input.addEventListener('input', () => {
	darkModeToggle();
	localStorage.setItem('darkMode', JSON.stringify(input.checked));
});
