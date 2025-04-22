const soma = (...valores) => {
    const somar = val => {
        let res = 0;
        for(i of val){
            res+=i
        }
        return res;
    }
    return somar(valores);
}

console.log(soma(1,2,3,4))