window.onload = function() { inp.value = "" }
console.log("Hello, world!")

const get = document.querySelector(".get")
const p = document.querySelector("p")
const inp = document.querySelector("input")
const sub = document.querySelector(".sub")
const a = document.querySelector("a")
const cont = document.querySelector(".container")

get.addEventListener('click', () => {
	let num = Math.floor(Math.random() * 211)	
	p.textContent = questions[num]
	let answer = answers[num]
	a.textContent = "Bakalım doğru mu?"
	inp.value = ""

	sub.addEventListener('click', function() {
		if(inp.value == answer) {
			a.textContent = "Doğru! BAŞKA SORU GELSİN"
			a.style.fontSize = "25px"
			a.style.color = "#A5DD9B"
			} else if(inp.value != answer) {
				a.textContent = answer + " olmalıydı.."
				a.style.fontSize = "20px"
				a.style.color = "#ef2d2d"
			}
				setTimeout(() => {
				a.style.fontSize = "18px"
				a.style.color = "#000"
				let num = Math.floor(Math.random() * 211)	
				p.textContent = questions[num]
				answer = answers[num]
				a.textContent = "Bakalım doğru mu?"
				inp.value = ""	
				}, 1000) 
		})
})
