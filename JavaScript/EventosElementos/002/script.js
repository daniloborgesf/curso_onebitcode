function addEntrada() {
  const ul = document.getElementById("input");

  const newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerText = "Nova entrada: ";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";

  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}
