// const c1 = document.getElementById("c1");

// const msg = () => {
//   alert("clicou");
// };

const cursos = [...document.querySelectorAll(".curso")];

cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("destaque");
  });
});

// cursos.addEventListener("click", (evt) => {
//   const el = evt.target;
//   el.classList.add("destaque");
// });
