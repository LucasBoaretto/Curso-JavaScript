const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySql', 'ReactNative']

cursos.map((el, key) => {
    const novoElemento = document.createElement('div');
    novoElemento.classList.add('curso', 'c1');
    novoElemento.setAttribute('id', "c" + key)
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento);
})




