const caixa = document.getElementById("caixa");

let cores = ["Azul", "Verde", "Vermelho", ["claro", "escuro", "medio"]];
let cursos = ["HTML", "CSS", "JavaScript", cores];

// cursos[0] = 2025
// cursos.push("C++") // Adiciona no final do array
// cursos.unshift("Python") // Adicionada no início do array
// cursos.pop() // remove no final do array
// cursos.shift() // remove no início do array


console.log(cursos[3][3][2]);

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})

console.log(cursos);