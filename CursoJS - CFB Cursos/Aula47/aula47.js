const p_array = document.getElementById("array");
const txt_pesquisar = document.getElementById("txt_pesquisar");
const btn_pesquisar = document.getElementById("btnPesquisar");
const resultado = document.getElementById("resultado");

const elementos_array = ["html", "css", "javascript"];
p_array.innerHTML = "[" + elementos_array + "]";

btn_pesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado"
    const retorno = elementos_array.find((e, i) => {
        if (e.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = "Valor encontrado: " + e + "<br> Posição: " + i;
            return e;
        }
    })
    console.log(retorno)
})