let balanceInicial = 100000;

let balanceActual = document.getElementById("balance");

balanceActual.innerText = balanceInicial;

let transacciones = [
  { id: 1, tipo: "Compra en línea", monto: 50.0, ingreso: false },
  { id: 2, tipo: "Depósito", monto: 100.0, ingreso: true },
  { id: 3, tipo: "Transferencia recibida", monto: 75.0, ingreso: true },
  { id: 4, tipo: "Compra en línea", monto: 5550.0, ingreso: false },
  { id: 5, tipo: "Depósito misma cuenta", monto: 10500.0, ingreso: true },
  { id: 6, tipo: "Transferencia recibida", monto: 7575.0, ingreso: true },
];

const listaTransaccionesEl = document.getElementById("listaTransacciones");

if (listaTransaccionesEl) {
// Usamos DocumentFragment para evitar reflows/repints múltiples
const fragment = document.createDocumentFragment();

for (const transaccion of transacciones) {
const li = document.createElement("li");
li.className = "list-group-item list-group-item-action";

if(transaccion.ingreso){
//si ingreso tiene como valor true hacemos lo siguiente:
li.classList.add("list-group-item-success");
}else {
//si es falso
li.classList.add("list-group-item-danger");
}

const monto = transaccion.monto.toLocaleString("es-CL");
li.textContent = `${transaccion.tipo} - $${monto}`;

fragment.appendChild(li);
}

// Limpiamos la lista actual (si existe contenido) y insertamos el fragmento de una sola vez
listaTransaccionesEl.innerHTML = "";
listaTransaccionesEl.appendChild(fragment);
}
