try {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (darkMode) {
        document.documentElement.style.setProperty(
            '--dark-mode-bg-color',
            '#1e1e1e',
        );
        document.documentElement.style.setProperty(
            '--dark-mode-text-color',
            'white',
        );
    }
} catch (e) {}
