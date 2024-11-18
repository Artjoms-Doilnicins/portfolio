const modal = document.getElementById('imageModal');
const images = document.querySelectorAll('.search-btn');
const modalImg = document.getElementById('modalImage');
const span = document.getElementsByClassName('close')[0];

images.forEach(function (btn) {
	btn.addEventListener('click', function () {
		const imgWrapper = btn.closest('.img-wrapper');
		const img = imgWrapper.querySelector('.zoom-image');

		if (img) {
			modal.style.display = 'flex';
			modalImg.src = img.src;
		}
	});
});

span.onclick = function () {
	modal.style.display = 'none';
};
