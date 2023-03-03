(function () {
	let val = "[" + (document.title || document.location.hostname) + "](" + document.location.href + ")"

	let btn = document.createElement("div")
	btn.id = 'btn'
	btn.innerText = "🥳 copy"
	btn.style = "background: #e6a23c; box-shadow: 1px 1px 3px #333; width: 120px; height: 40px; text-align: center; line-height: 40px; border-radius: 4px; color: #333; cursor: pointer; font-weight: 700; font-family: segoe script, courier new;font-size: 16px;"
	btn.addEventListener("click", copy)

	let ipt = document.createElement("input")
	ipt.value = val
	ipt.id = "ipt"
	ipt.style = "opacity: 0;"
	ipt.select()

	let cont = document.createElement("div")
	cont.id = 'cont'
	cont.style = "position: fixed; right: 32px; top: 16px; width: 100px;z-index: 10000;"

	cont.appendChild(btn)
	cont.appendChild(ipt)
	document.body.appendChild(cont)
})();

function copy() {
	const btn = document.querySelector('#btn')
	const ipt = document.querySelector('#ipt')
	const cont = document.querySelector('#cont')
	ipt.select();
	if (!!document.execCommand('copy')) {
		document.execCommand('copy')
		console.log('copy success')
		btn.innerText = '🎉 success'
		btn.style.background = '#67c23a'
		btn.style.color = '#fff'

	} else {
		console.log('copy failed')
		btn.innerText = '❌ faild'
		btn.style.background = '#f56c6c'
		btn.style.color = '#fff'
	}

	setTimeout(() => {
		document.body.removeChild(cont)
	}, 1500)
}