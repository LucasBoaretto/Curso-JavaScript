const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")
const resultado = document.getElementById("resultado")
const somar = document.getElementById("somar");
const subtrair = document.getElementById("subtrair");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

const operacoes = [
    // somar
    () => Number(valor1.value) + Number(valor2.value),
    // subtrair
    () => Number(valor1.value) - Number(valor2.value),
    // multiplicar
    () => Number(valor1.value) * Number(valor2.value),
    // dividir
    () => Number(valor1.value) / Number(valor2.value)
]

somar.addEventListener("click", () => {
    resultado.value = operacoes[0]();
})
subtrair.addEventListener("click", () => {
    resultado.value = operacoes[1]();
})
multiplicar.addEventListener("click", () => {
    resultado.value = operacoes[2]();
})
dividir.addEventListener("click", () => {
    resultado.value = operacoes[3]();
})
