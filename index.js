const balloonContainer = document.querySelector('.balloon-container')
const acceptButton = document.querySelector('.accept')
const timeLineBoard = document.querySelector('.outside-wrap')
const invitation = document.querySelector('.invitation')

acceptButton.addEventListener('click', () => {
	confetti({
		particleCount: 500,
		spread: 70,
		origin: { y: 1 },
	})

	timeLineBoard.style.display = 'block'
	invitation.style.display = 'none'
	balloonContainer.style.display = 'flex'

	setTimeout(() => {
		balloonContainer.style.zIndex = 1
	}, 10000)

	sessionStorage.setItem('accepted', 'true')
})

// check local storage
const accepted = sessionStorage.getItem('accepted')
if (accepted) {
	timeLineBoard.style.display = 'block'
	invitation.style.display = 'none'
	balloonContainer.style.display = 'flex'

	setTimeout(() => {
		balloonContainer.style.zIndex = 1
	}, 10000)
}

function random(num) {
	return Math.floor(Math.random() * num)
}

function getRandomStyles() {
	var r = random(255)
	var g = random(255)
	var b = random(255)
	var mt = random(200)
	var ml = random(50)
	var dur = random(5) + 5
	return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `
}

function createBalloons(num) {
	for (var i = num; i > 0; i--) {
		var balloon = document.createElement('div')
		balloon.className = 'balloon'
		balloon.style.cssText = getRandomStyles()
		balloonContainer.append(balloon)
	}
}

function removeBalloons() {
	balloonContainer.style.opacity = 0
	setTimeout(() => {
		balloonContainer.remove()
	}, 500)
}

window.addEventListener('load', () => {
	createBalloons(30)
})

// window.addEventListener('click', () => {
// 	removeBalloons()
// })

