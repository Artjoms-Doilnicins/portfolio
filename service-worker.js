const CACHE_NAME = 'portfolio-cache-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './src/css/styles.css',
    './src/css/dark-mode.css',
    './src/css/img-zoom.css',
    './src/js/dark-mode.js',
    './src/js/follow-btn.js',
    './src/js/img-zoom.js',
    './src/js/navbar.js',
    // IMAGES
    './src/assets/images/profile.png',
    './src/assets/images/hangman.png',
    './src/assets/images/multiplication-quiz.png',
    './src/assets/images/rock-paper-scissors.png',
    './src/assets/images/pomodoro-timer.png',
    './src/assets/images/calculator.png',
    './src/assets/images/password-generator.png',
    './src/assets/images/countdown-to-new-year.png',
    './src/assets/images/random-image-gallery.png',
    './src/assets/images/random-emoji-generator.png',
    './src/assets/images/text-character-count.png',
    // ICONS
    './src/assets/icons/github-icon.svg',
    './src/assets/icons/search-icon.svg',
    './src/assets/icons/hamburger-icon.svg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => response || fetch(event.request)),
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((keys) =>
                Promise.all(
                    keys
                        .filter((key) => key !== CACHE_NAME)
                        .map((key) => caches.delete(key)),
                ),
            ),
    );
});
