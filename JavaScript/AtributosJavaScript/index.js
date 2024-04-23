const input = document.getElementById("input");

// Atributo Value
document.getElementById("value").addEventListener("click", function () {
  input.value = input.value === " " ? "Olá, Mundo!" : " ";
  input.getAttribute("value");
});

// Atributo Type
document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";
  // input.setAttribute("type", "radio");
});

// Atributo Placeholder
document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite algo..";
});

// Atributo Disable
document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

// Atributo Data
document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  alert("O valor do atributo data-something é: " + data);
  input.dataset.somethingElse = "Algum outro valor";
});
