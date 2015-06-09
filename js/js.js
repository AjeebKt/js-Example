function add() {
    var x = document.createElement("P");
    var txt = document.getElementById('txt').value;
    var t = document.createTextNode(txt);
    x.appendChild(t);
    document.getElementById("add").appendChild(x);
}