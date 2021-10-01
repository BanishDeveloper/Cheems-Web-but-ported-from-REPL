themes = {
	light: [
		body = "rgb(220,220,220)", // body 0
		cheemslogo = "rgb(0,0,0)", // logo 1
		searchBTN = "rgb(99, 98, 98)",// searchBTN2
		searchWebmode = "rgb(185, 175, 34)", // SMW 3
		searchBorder = "rgb(9, 106, 170)", // searchInp-Border 4
		themeName = "Default Theme" // tname 5
	],
	dark: [
		body = "rgb(25,25,35)", // body 0
		cheemslogo = "rgb(255,255,255)", // logo 1
		searchBTN = "rgb(180,180,180)",// searchBTN 2
		searchWebmode = "rgb(235, 224, 73)", // SMW 3
		searchBorder = "rgb(116, 56, 245)", // searchInp-Border 4
		themeName = "Dark Theme" // tname 5
	],
	sky: [
		body = "rgb(100,144,255)", // body 0
		cheemslogo = "rgb(0,0,0)", // logo 1
		searchBTN = "rgb(40, 40, 125)",// searchBTN 2
		searchWebmode = "rgb(255,255,255)", // Search Mode 3
		searchBorder = "rgb(35, 135, 102)", // searchInp-Border 4
		themeName = "Sky Theme" // tname 5
	],
	lava: [
		body = "rgb(240, 17, 17)", // body 0
		cheemslogo = "rgb(0,0,0)", // logo 1
		searchBTN = "rgb(87, 41, 41)",// searchBTN 2
		searchWebmode = "rgb(255,255,255)", // Search Mode 3
		searchBorder = "rgb(46, 32, 32)", // searchInp-Border 4
		themeName = "Lava Theme" // tname 5
	]
}
function placetheme(theme) {
	document.body.style.backgroundColor = theme[0];
	document.getElementById("settings-page").style.backgroundColor = theme[0];
	document.getElementById("logo-main").style.color = theme[1];
	document.getElementById("searchBTN").style.color = theme[2]
	document.getElementById("search-mode").style.color = theme[3]
	document.getElementById("search").style.borderColor = theme[4]
} // BETTER theme placement system (allows custom themes hardcoded and theme customizer)
