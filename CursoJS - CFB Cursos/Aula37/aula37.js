const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".c1")];

caixa1.addEventListener("click", (evt) => {
  alert("clicou");
});

cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
});
