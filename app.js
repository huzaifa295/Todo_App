var parent = document.getElementById("parent");
var inp = document.getElementById("inp");
console.log(inp.value);
var createBtn = document.getElementById("createBtn");

function createTodo(ele) {
  if (!inp.value) {
    alert("Please required fields");
    return;
  }
  var li = document.createElement("li");
  var liText = document.createTextNode(inp.value);
  li.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );
  li.appendChild(liText);
  li.setAttribute("class", "li");

  var div = document.createElement("div");
  div.setAttribute("class", "d-flex gap-4");

  var editBtn = document.createElement("button");
  var editBtn_text = document.createTextNode("Edit Todo");
  editBtn.appendChild(editBtn_text);
  div.appendChild(editBtn);
  editBtn.setAttribute("class", "btn btn-info");
  editBtn.setAttribute("onclick", "editTodo(this)");

  var delTodo = document.createElement("button");
  var delTodo_text = document.createTextNode("Delete Todo");
  delTodo.appendChild(delTodo_text);
  delTodo.setAttribute("class", "btn btn-danger");
  div.appendChild(delTodo);
  delTodo.setAttribute("onclick", "delTodo(this)");

  li.appendChild(div);
  parent.appendChild(li);

  inp.value = "";
}
function editTodo(ele) {
  var newInp = prompt("Enter new Todo");
  li = ele.parentNode.parentNode.firstChild.nodeValue;
  ele.parentNode.parentNode.firstChild.nodeValue = newInp;
  console.log(li);
}
function delAll() {
  parent.remove();
}
function delTodo(ele) {
  var delInp = ele.parentNode.parentNode;
  console.log(delInp);
  delInp.remove();
}
