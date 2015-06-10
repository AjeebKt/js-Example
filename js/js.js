

function add() {
	// var z = document.createElement("LI")
	var ToDoVal = document.getElementById('txt').value;
// console.log(ToDoVal);

	if (ToDoVal){
	    var createLi = document.createElement("LI");
	    var txtValue = document.getElementById('txt').value;
	    var node = document.createTextNode(txtValue);
	    createLi.appendChild(node);
	    document.getElementById("add").appendChild(createLi);
	    document.getElementById("txt").value= "";		
	}else{
		alert("please add to do in to the input field");
	}
	// document.getElementById("txt").setAttribute("placeholder","End");
}