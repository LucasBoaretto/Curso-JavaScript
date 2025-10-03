const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")

cursos.map((el, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)

})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];
    const radioSelecionado = todosRadios.filter((el, ind, arr) => {
        return el.checked
    })
    return radioSelecionado[0];
}

btnCursoSelecionado.addEventListener("click", (env) => {
    const rs = radioSelecionado();
    if (rs == undefined) { // tratamento de erro caso nenhum curso esteja selecionado
        alert("Selecione um curso");
    } else {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent;
        alert("Curso selecionado: " + cursoSelecionado)
    }
})
btnRemoverCurso.addEventListener("click", (env) => {
    const rs = radioSelecionado();
    try { // tratamento de erro caso nenhum curso esteja selecionado
        const cursoSelecionado = rs.parentNode.parentNode;
        cursoSelecionado.remove();
        alert("Curso removido");
    } catch (error) {
        alert("Selecione um curso para remover");
    }
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling