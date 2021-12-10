function showNav(){
	var nav = document.getElementById('nav_bar')
	var montage = document.getElementById('bg_img')
	// console.log(montage.style.opacity)

	// montage.style.opacity = 1 + window.scrollY / -650

	// console.log(montage.style.opacity)
	// console.log(window.scrollY)

	nav.classList.add('shown')

	if (window.scrollY == 0) {
		nav.classList.remove('shown')
	}
}

