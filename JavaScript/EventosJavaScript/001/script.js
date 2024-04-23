function register(eventJs) {
  console.log(eventJs);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não conferem!");
  }
}

function removeEvent() {
  button.removeEventListener("click", register);
  alert("Evento Removido");
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);
button.addEventListener("mouseover", function (eventJs) {
  console.log(eventJs);
});
