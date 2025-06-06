const input = document.querySelector('.input');
const switchCircle = document.querySelector('.switch-circle');

const darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
input.checked = darkMode;

const darkModeToggle = () => {
    if (input.checked) {
        document.documentElement.style.setProperty(
            '--dark-mode-bg-color',
            '#1e1e1e',
        );
        document.documentElement.style.setProperty(
            '--dark-mode-text-color',
            'white',
        );
        switchCircle.style.transform = 'translateX(40px)';
    } else {
        document.documentElement.style.setProperty(
            '--dark-mode-bg-color',
            'white',
        );
        document.documentElement.style.setProperty(
            '--dark-mode-text-color',
            'black',
        );
        switchCircle.style.transform = 'translateX(0)';
    }
};
darkModeToggle();

input.addEventListener('input', () => {
    darkModeToggle();
    localStorage.setItem('darkMode', JSON.stringify(input.checked));

    switchCircle.classList.remove('animate-on', 'animate-off');
    void switchCircle.offsetWidth;
    switchCircle.classList.add(input.checked ? 'animate-on' : 'animate-off');
});
