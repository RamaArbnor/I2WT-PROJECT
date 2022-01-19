var to_top = document.getElementById('to_top')

// Hover Card
function hoverCard() {

}

// Show Back to Top arrow on scroll, hide when on top
function showArrow() {
	to_top.style.top = '85vh'
	to_top.style.transform = 'rotateZ(0deg)'

	if (window.scrollY == 0) {
		to_top.style.top = '105vh'
		to_top.style.transform = 'rotateZ(-90deg)'
	}
}