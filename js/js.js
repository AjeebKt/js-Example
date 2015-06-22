

function add() {
	// var z = document.createElement("LI")
	var ToDoVal = document.getElementById('txt').value;
var ulList = document.getElementById("todo-list");

console.log(ulList.childNodes);

	if (ToDoVal){
	    var createLi = document.createElement("LI");
	    var node = document.createTextNode(ToDoVal);
	    createLi.appendChild(node);


	    document.getElementById("ul").appendChild(createLi);
	    document.getElementById("txt").value= "";		
	}else{
		// alert("please add to do in to the input field");
	}
	// document.getElementById("txt").setAttribute("placeholder","End");
}