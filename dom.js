document.addEventListener("DOMContentLoaded", function() {
    const headerTitle = document.getElementById("header-title");
    const parentElement = headerTitle.parentElement;
  
    const lastElementChild = document.getElementById("items").lastElementChild;
    const lastChild = document.getElementById("items").lastChild;
  
    const newItem = document.createElement("li");
    newItem.className = "list-group-item";
    newItem.textContent = "New Item";
    document.getElementById("items").appendChild(newItem);
  
    const firstElementChild = document.getElementById("main").firstElementChild;
    const firstChild = document.getElementById("main").firstChild;
  
    const nextSibling = headerTitle.nextSibling;
    const nextElementSibling = headerTitle.nextElementSibling;
  
    const previousSibling = document.getElementById("main").previousSibling;
    const previousElementSibling = document.getElementById("main").previousElementSibling;
  
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "new-div");
  
    const newText = document.createTextNode("This is a new text node.");
    newDiv.appendChild(newText);
  
    document.body.appendChild(newDiv);
  });
  