function add() {
	// var z = document.createElement("LI")
    var createLi = document.createElement("LI");
    var txtValue = document.getElementById('txt').value;
    var node = document.createTextNode(txtValue);
    x.appendChild(node);
    document.getElementById("add").appendChild(createLi);
    document.getElementById("txt").value= "";
	// document.getElementById("txt").setAttribute("placeholder","End");
}