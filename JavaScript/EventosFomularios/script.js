const form = document.getElementById("orderForm");

form.addEventListener("submit", function (eventJs) {
  eventJs.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const address = document.querySelector("input[name='address']").value;
  const breadType = document.querySelector("select[name='breadType']").value;
  const main = document.querySelector("select[name='main']").value;
  const observations = document.querySelector("textarea[name='observations']").value;

  let salad = "";
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n";
  });

  alert(
    "----|Pedido Realizado!|----" +
    "\nNome do Cliente: " +
    name +
    "\nEndereço de Entrega: " +
    address +
    "\nTipo de Pão: " +
    breadType +
    "\nRecheio: \n - " +
    main +
    "\n" +
    salad +
    "\nObservações: " +
    observations
  );
});
