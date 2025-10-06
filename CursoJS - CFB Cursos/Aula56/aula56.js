const caixa = document.getElementById("caixa");

const carros = ["Polo", "Golf", "T-Cross", "HRV"];
let ul = `<ul>`
carros.map((el) => {
    ul += `<li>${el}</li>`
})
ul += `</ul>`

// const curso = "JavaScript";
// const canal = "CFB Cursos";
// // const frase = "Este é o curso de " + curso + " do canal " + canal;
// const frase = `Este é o curso de ${curso} do canal ${canal}`;

caixa.innerHTML = ul;