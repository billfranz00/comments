var stuff = [];

function enterMessage() {
	var yourName = document.getElementById("name").value,
		yourMessage = document.getElementById("message").value,
		h2 = document.createElement("h2"),
		p = document.createElement("p"),
		theSelection = Number(document.getElementById("theSelect").value);
	h2.innerHTML = yourName;
	p.innerHTML = yourMessage;
	console.log(theSelection)
	if (theSelection === 1) {
		document.getElementById("division").appendChild(h2)
		document.getElementById("division").appendChild(p)
	}
	else {
		document.body.appendChild(h2)
		document.body.appendChild(p)
	}
}