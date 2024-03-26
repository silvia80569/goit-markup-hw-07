const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("clic", () => {
  nav.classList.add("visible");
})

cerrar.addEventListener("clic", () => {
  nav.classList.remove("visible");
} )