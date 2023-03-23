//1
var numero;
numero = parseInt(prompt("Digite um número inteiro:"));

if (numero > 0){
    alert("O número é positivo.");
}
else {
    alert("O número é negativo.");
}

//2
var numero;
numero = parseInt(prompt("Digite um número inteiro:"));

if (numero%2 == 0){
    alert("O número é par.");
}
else {
    alert("O número é ímpar.");
}

//3

var val1, operacao, val2, resultAdic, resultSub, resultMulti, resultDivi;
val1 = Number(prompt("Insira o primeiro valor:"));
operacao = prompt("Insira a operação matemática:");
val2 = Number(prompt("Insira o segundo valor:"));
resultAdic = val1 + val2;
resultSub = val1 - val2;
resultMulti = val1 * val2;
resultDivi = val1 / val2;

if (operacao == "+" || operacao == "adição"){
    alert("O resultado é: " +resultAdic +".");
}
if (operacao == "-" || operacao == "subtração"){
    alert("O resultado é: " +resultSub +".");
}
if (operacao == "*" || operacao == "x" || operacao == "X" || operacao == "multiplicação"){
    alert("O resultado é: " +resultMulti +".");
}
if (operacao == "/" || operacao == "divisão"){
    alert("O resultado é: " +resultDivi +".");
}

//4
var sal, finan;
sal = prompt("Insira o valor do salário:");
finan = prompt("Insira o valor do financiamento:");

if (finan<=sal*5){
    alert("Financiamento Concedido");
}
else{
    alert("Financiamento Negado");
}

alert("Obrigado por nos consultar.");

//Passar o exemplo para JS - Conceitos
var conceito;
conceito = String(prompt("Digite seu conceito (A, B ou C): "));

if (conceito != "A" && conceito != "B" && conceito != "C"){
    alert("Digite apenas A, B ou C.");
}
else{
    if (conceito == "A" || conceito == "B"){
        alert("Aprovado!");
    }
    else{
        alert("Reprovado!");
    }
}

//5
var numero;
numero = parseInt(prompt("Insira um número inteiro:"));

if (numero>0){
    if (numero%2 == 0){
        alert("O número é par.");
    }
    else{
        alert("O número é ímpar.");
    }
}
else{
    alert("Esse número não é positivo.");
}

//6
var nota;
nota = parseInt(prompt("Insira a nota do aluno:"));

if (nota<3){
    alert("Conceito E");
}
if(nota == 3 || nota == 4 || nota == 5){
    alert("Conceito D");
}
if (nota == 6 || nota == 7){
    alert("Conceito C");
}
if (nota == 8 || nota == 9){
    alert("Conceito B");
}
if (nota == 10){
    alert("Conceito A");
}