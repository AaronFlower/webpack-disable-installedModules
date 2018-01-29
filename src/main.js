function loadJS (file) {
	console.log('loadJS...')
	let scripts = Array.from(document.querySelectorAll('script.main'))
	scripts.forEach(script => script.remove())
	let script = document.createElement('script')
	script.setAttribute('class', 'main')
	script.src = file
	document.body.append(script.cloneNode())
}
setInterval(() => loadJS('./scripts/bundle-pageA.js'), 1000)