/*document.getElementById('texto').innerHTML = 'Meu primeiro texto <b> JS </b>';
alert(10+5);
console.log("Oi isso é um console.log");*/

// let a, b, c; a = 5; b = 6; c = 7;

/* function minhafuncao(){
     Document.write(5+5);
 }
*/

/* var a = 1;
 var b = 5;
 var c = a + b;
 console.log(c);
/*

/*
Vamos entender variáveis,
Variáveis são "recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No JavaScript temos 3 palavras-chaves para delcarar variáveis:
-> var > coringa
-> let > não permite redeclaração da mesma variável ao contrario do var
-> const > faz com que o valor seja constante, ou seja, imutavel depois da declaração
*/

/*var pote = 'Bombom!';
alert(pote);*/

//declaração das variáveis
var nome, sobrenome, nomeCompleto, idade, soma 

//atribuição dos valores
nome = 'Lucas ';
sobrenome = 'Boaretto'
idade = 21;

soma = idade + 10;
nomeCompleto = nome + sobrenome;

pessoa = nome + soma;
document.getElementById('texto').innerHTML = pessoa;