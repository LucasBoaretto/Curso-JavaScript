const Pessoa = {
    nome: '',
    idade: '',
    getNome: function () {
        return this.nome;
    },
    setNome: function (nome) {
        this.nome = nome;
    },
    getIdade: function () {
        return this.idade;
    },
    setIdade: function (idade) {
        this.idade = idade;
    }
}

let pessoas = [];
const btn_add = document.getElementById("btn_add")
const res = document.querySelector(".res");

const addPessoa = () => {
    res.innerHTML = '';
    pessoas.map((p) => {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${p.getNome()} <br/> Idade: ${p.getIdade()}`;
        res.appendChild(div);
    })
}

btn_add.addEventListener("click", () => {
    const nome = document.getElementById("f_nome");
    const idade = document.getElementById("f_idade");
    const p = Object.create(Pessoa);
    p.setNome(nome.value);
    p.setIdade(idade.value);
    pessoas.push(p);
    nome.value = "";
    idade.value = "";
    nome.focus();
    addPessoa();
})