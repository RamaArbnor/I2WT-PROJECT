var nav = document.getElementById('nav_bar')
var montage = document.getElementById('bg_img')
var logo = document.getElementById('logo')
var nav_cats = document.querySelectorAll('.nav-cat')
var nav_cats_txt = document.querySelectorAll('.nav-cat a')

// Show nav when scrolling, hide when on top
function showNav(){
	nav.classList.add('shown')

	if (window.scrollY == 0) {
		nav.classList.remove('shown')
	}
}

// Dim as user scrolls
// window.addEventListener('scroll', () => {
// 	// console.log(montage.style.opacity)
// 	// console.log(montage.style.opacity)
// 	// console.log(window.scrollY)
// 	montage.style.opacity = 1 + window.scrollY / -1350
// })


// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
	let scrolly = window.scrollY

	if (scrolly != 0) {
		montage.style.top = -3 + (scrolly * -0.05) + '%'
		logo.style.fontSize = 200 + scrolly * -0.1 + 'px'
		// console.log(logo.style.marginTop)
	}
	else{
		montage.style.top = '-3%'
		logo.style.fontSize = '200px'
	}
})

// Nav Item Hover Effect

// Goofy Bounce
function hoverNavItem(a_id, finger_id) {
	// console.log('test')
	let nav_item = document.getElementById(a_id)
	let nav_finger = document.getElementById(finger_id)

	// Finger Hover
	nav_finger.style.top = '30%'
	nav_finger.style.transform = 'rotateZ(-270deg)'

	//Bounce
	nav_item.style.fontSize = '15px'

	setTimeout(() => {
		nav_item.style.fontSize = '35px'
		nav_item.style.color = 'red'
	}, 100)

	setTimeout(() => {
		nav_item.style.fontSize = '25px'
	}, 200)
}

function leaveNavItem(a_id, finger_id) {
	let nav_item = document.getElementById(a_id)
	let nav_finger = document.getElementById(finger_id)

	// Return Finger
	nav_finger.style.top = '-100%'
	nav_finger.style.transform = 'rotateZ(200deg)'

	// Return Bounce
	setTimeout(() => {
		nav_item.style.fontSize = '20px'
		nav_item.style.color = 'white'
	}, 200)
}

function jumpToPanel(a_id) {
	let nav_item = document.getElementById(a_id)

	nav_item.style.transform = 'rotateY(720deg)'
	setTimeout(() => {
		nav_item.style.transition = 'all 0.2s ease, transform 0s ease'
		nav_item.style.transform = 'rotateY(0deg)'
	}, 700)

	nav_item.style.transition = 'all 0.2s ease, transform 0.8s ease'
}

// Panel Hover Effect
function slidePanel(id, btn_id, slide_id) {
	let panel = document.getElementById(id)
	let btn = document.getElementById(btn_id)
	let slide = document.getElementById(slide_id)
	let content = document.querySelectorAll('#' + id + ' .right, #' + id + ' .left')

	slide.style.transform = 'translate(50%, -100%)'
	setTimeout(() => {
		btn.style.display = 'inline'
		panel.style.filter = 'blur(3px)'
	}, 300)
}