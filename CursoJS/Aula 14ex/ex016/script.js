function contar() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    resultado = document.getElementById('resultado');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!');
        resultado.innerHTML = 'Impossível contar!';
    } else {
        resultado.innerHTML = 'Contando:<br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0){
            alert('Passo inválido!');
            p = 1;
        }

        if (i < f) {
            for (let contagem = i; contagem <= f; contagem += p) {
                resultado.innerHTML += `${contagem}👉`;
            }
        }else{
            for (let contagem = i; contagem >= f; contagem -= p) {
                resultado.innerHTML += `${contagem}👉`;
            }
        }
        resultado.innerHTML += '🏁';

    }
}
