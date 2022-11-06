function init(){
//add your javascrip between these two lines of code
	document.getElementById("entrybutton").addEventListener("click", displayResult);
}

function displayResult() {
	var text = document.getElementById("entryinput").value;
	alert("Krystian Szczech: " + text);
	document.getElementById("textoutput").innerText = text;
}


window.addEventListener('load', init);
