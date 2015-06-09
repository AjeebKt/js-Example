function add() {
	// var z = document.createElement("LI")
    var x = document.createElement("LI");
    var txt = document.getElementById('txt').value;
    var t = document.createTextNode(txt);
    x.appendChild(t);
    document.getElementById("add").appendChild(x);
    document.getElementById("txt").value= "";
	// document.getElementById("txt").setAttribute("placeholder","End");
}