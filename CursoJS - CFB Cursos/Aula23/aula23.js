function soma(...valores){
    let soma = 0;
    for(let v of valores){
        soma += v;
    }

    return soma
}

console.log(soma(1,1,1,1,4))