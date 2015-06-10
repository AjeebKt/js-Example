

function add() {
	// var z = document.createElement("LI")
	var ToDoVal = document.getElementById('txt').value;

console.log(ToDoVal);

	if (ToDoVal=="")
	{

	}
	else
	{
	    var createLi = document.createElement("LI");
	    var txtValue = document.getElementById('txt').value;
	    var node = document.createTextNode(txtValue);
	    createLi.appendChild(node);
	    document.getElementById("add").appendChild(createLi);
	    document.getElementById("txt").value= "";		
	}
	// document.getElementById("txt").setAttribute("placeholder","End");
}