// searchengine
var searchbar = document.getElementById("search")
var search_mode = document.getElementById("search-mode")
let snumber = 0
searchmode_types = [
	"Website",
	"Google",
]
search_mode.onclick = function () {
	if (snumber > (searchmode_types.length - 2)) {
		search_mode.innerHTML = "Search Mode: Website";
		snumber = 0;
	} else {
		snumber += 1
		search_mode.innerHTML = "Search Mode: " + searchmode_types[snumber];
	}
}
function search(url) {
	if (snumber == 0) {
		window.location.assign("https://" + url);
	} else if (snumber == 1) {
		window.location.assign("https://www.google.com/search?q=" + url);
	}
}
searchbar.onkeypress = function (e) {
	if (e.key == "Enter") {
		search(searchbar.value);
	}
}
document.getElementById("searchBTN").onclick = function () {
	search(searchbar.value);
}
//settings opener
document.getElementById("setBTN").onclick = function () {
	document.title = "CHEEMS SETTINGS"
	document.getElementById("main-page").style.display = "none"
	document.getElementById("settings-page").style.display = "inline"
}
document.getElementById("closeBTN").onclick = function () {
	document.title = "CHEEMS WEB"
	document.getElementById("main-page").style.display = "inline"
	document.getElementById("settings-page").style.display = "none"
}
// themeloader button (so you dont have to use placetheme inside of console)
var theme_num = 0
document.getElementById("change-theme").onclick = function () {
	if (theme_num > (Object.keys(themes).length - 2)) {
		theme_num = 0;
		placetheme(Object.values(themes)[theme_num])
		document.getElementById("change-theme").innerHTML = Object.values(themes)[theme_num][5]
	} else {
		theme_num += 1
		placetheme(Object.values(themes)[theme_num])
		document.getElementById("change-theme").innerHTML = Object.values(themes)[theme_num][5]

	}
}
