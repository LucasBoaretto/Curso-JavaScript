const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");

console.log(c1_2.parentNode.parentNode); //pega o avô dele

// console.log(caixa1.hasChildNodes());
// console.log(btn_c[0].hasChildNodes());

// console.log(caixa1.children.length > 0 ? "Possui filhos" : "Nao possui filhos");
// console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Nao possui filhos");

// caixa1.children[1].innerHTML = 'Teste'

// if (btn_c[0].children.length > 0) {
//   console.log("tem filhos");
// } else {
//   console.log("não possui filhos");
// }

// console.log(caixa1.firstElementChild);
// console.log(caixa1.lastElementChild);
// console.log(caixa1.children);
