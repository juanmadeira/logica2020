//1
var val1, val2, menorval, maiorval, result;
val1 = parseInt(prompt("Insira o primeiro número inteiro:"));
val2 = parseInt(prompt("Insira o segundo número inteiro:"));

menorval = Math.min(val1, val2);
maiorval = Math.max(val1, val2);
result = maiorval - menorval;

alert("O resultado da difereça do maior valor pelo menor valor é: " +result +".");

//2
var numero;
numero = parseInt(prompt("Insira um número inteiro:"));

if (numero >= 1 && numero <= 9){
    alert("O valor está na faixa permitida.");
}
else{
    alert("O valor está fora da faixa permitida.");
}

//3
var numero;
numero = parseInt(prompt("Insira um número de 0 a 10:"));

if (numero >= 0 && numero <= 10){

    if (numero == 0){
        alert("Zero.");
    }
    if (numero == 1){
        alert("Um.");
    }
    if (numero == 2){
        alert("Dois.");
    }
    if (numero == 3){
        alert("Três.");
    }
    if (numero == 4){
        alert("Quatro.");
    }
    if (numero == 5){
        alert("Cinco.");
    }
    if (numero == 6){
        alert("Seis.");
    }
    if (numero == 7){
        alert("Sete.");
    }
    if (numero == 8){
        alert("Oito.");
    }
    if (numero == 9){
        alert("Nove.");
    }
    if (numero == 10){
        alert("Dez.");
    }
}
else{
    alert("O número não está na faixa de 0 a 10.");
}

//4
var idade;
idade = parseInt(prompt("Insira a idade:"));

if (idade < 16){
    alert("Não eleitor.");
} 

if (idade >= 18 && idade < 65){
    alert("Eleitor obrigatório.");
}

if (idade >= 16 && idade < 18){
    alert("Eleitor facultativo.");
}

if (idade >= 65){
    alert("Eleitor facultativo.");
}

//5
var val1, val2, val3, val4, val1mod2, val1mod3;
val1 = parseInt(prompt("Insira o primeiro número inteiro:"));
val2 = parseInt(prompt("Insira o segundo número inteiro:"));
val3 = parseInt(prompt("Insira o terceiro número inteiro:"));
val4 = parseInt(prompt("Insira o quarto número inteiro:"));

val1mod2 = val1 % 2;
val1mod3 = val1 % 3;
val2mod2 = val2 % 2;
val2mod3 = val2 % 3;
val3mod2 = val3 % 2;
val3mod3 = val3 % 3;
val4mod2 = val4 % 2;
val4mod3 = val4 % 3;

    if (val1mod2 !== 0 && val1mod3 !== 0){
    alert("O valor " +val1 +" não é divisível por 2 ou por 3.");
    }

    if (val2mod2 !== 0 && val2mod3 !== 0){
    alert("O valor " +val2 +" não é divisível por 2 ou por 3.");
    }

    if (val3mod2 !== 0 && val3mod3 !== 0){
    alert("O valor " +val3 +" não é divisível por 2 ou por 3.");
    }

    if (val4mod2 !== 0 && val4mod3 !== 0){
    alert("O valor " +val4 +" não é divisível por 2 ou por 3.");
    }

if (val1mod2 == 0 && val1mod3 == 0){
    alert("O valor " +val1 +" é divisível por 2 e por 3.");
}
else{
    if (val1mod2 == 0){
        alert("O valor " +val1 +" é divisível apenas por 2.");
    }
    if (val1mod3 == 0){
        alert("O valor " +val1 +" é divisível apenas por 3.");
    }
}

if (val2mod2 == 0 && val2mod3 == 0){
    alert("O valor " +val2 +" é divisível por 2 e por 3.");
}
else{
    if (val2mod2 == 0){
        alert("O valor " +val2 +" é divisível apenas por 2.");
    }
    if (val2mod3 == 0){
        alert("O valor " +val2 +" é divisível apenas por 3.");
    }
}

if (val3mod2 == 0 && val3mod3 == 0){
    alert("O valor " +val3 +" é divisível por 2 e por 3.");
}
else{
    if (val3mod2 == 0){
        alert("O valor " +val3 +" é divisível apenas por 2.");
    }
    if (val3mod3 == 0){
        alert("O valor " +val3 +" é divisível apenas por 3.");
    }
}

if (val4mod2 == 0 && val4mod3 == 0){
    alert("O valor " +val4 +" é divisível por 2 e por 3.");
}
else{
    if (val4mod2 == 0){
        alert("O valor " +val4 +" é divisível apenas por 2.");
    }
    if (val4mod3 == 0){
        alert("O valor " +val4 +" é divisível apenas por 3.");
    }
}

//6
var numero, result;
numero = Number(prompt("Insira um número:"));

if (numero > 0){
    alert("O resultado é: " +numero / 2);
}

else{
    alert("O resultado é: -" +Math.pow(numero, 2));
}

//7
var val1, val2, val3, val4, val5, maiorval, menorval;
val1 = parseInt(prompt("Insira o primeiro número inteiro:"));
val2 = parseInt(prompt("Insira o segundo número inteiro:"));
val3 = parseInt(prompt("Insira o terceiro número inteiro:"));
val4 = parseInt(prompt("Insira o quarto número inteiro:"));
val5 = parseInt(prompt("Insira o quinto número inteiro:"));

menorval = Math.min(val1, val2, val3, val4, val5);
maiorval = Math.max(val1, val2, val3, val4, val5);

alert("O maior valor é " +maiorval +" e o menor valor é " +menorval +".");

//8
var numero;
numero = parseInt(prompt("Insira um número inteiro:"));

if (!(numero >= 3)){
    alert("O número é: " +numero +".");
}

//9
var ano, aux;
ano = parseInt(prompt("Insira um número inteiro:"));
aux = ano % 4;

if (ano > 1584){
    if (aux == 0){
        alert("O número inserido representa um ano bissexto.");
    }
    else{
        alert("O número inserido não representa um ano bissexto.");
    }
}
else{
    alert("O número inserido não representa um ano bissexto.");
}

//10
var preco, orig, reg;
preco = Number(prompt("Insira o preço do produto:"));
orig = String(prompt("Insira o código de origem do produto:"));

if(orig == 1){
    alert("O produto com o preço de R$ " +preco +" pertence à Região de Procedência Norte.");
}

else if(orig == 2 || orig == 5 || orig == 9){
    alert("O produto com o preço de R$ " +preco +" pertence à Região de Procedência Sul.");
}

else if(orig == 3 || orig >= 10 && orig <= 15){
    alert("O produto com o preço de R$ " +preco +" pertence à Região de Procedência Leste.");
}

else if(orig == 7 || orig == 20){
    alert("O produto com o preço de R$ " +preco +" pertence à Região de Procedência Oeste.");
}
else{
    alert("O produto com o preço de R$ " +preco +" é importado."); 
}

//11
var numero, aux;
numero = Number(prompt("Insira um número:"));
aux = numero % 3

if (aux == 0){
    alert("O número " +numero +" é múltiplo de 3.");
}
else{
    alert("O número " +numero +" não é múltiplo de 3.");
}

//12
var numero1, numero2, divisao;
numero1 = Number(prompt("Insira o primeiro número:"));
numero2 = Number(prompt("Insira o segundo número:"));
divisao = numero1 % numero2;

if (divisao == 0){
    alert("A divisão de " +numero1 +" por " +numero2 +" é exata.");
}
else{
    alert("A divisão de " +numero1 +" por " +numero2 +" não é exata.");
}

//13
var valor, lucro, result;
valor = Number(prompt("Insira o valor do produto:"));

if (valor < 20){
    lucro = valor * 0.45
    result = valor + lucro
    alert("O valor de venda para o produto é R$ " +result + ".");
}
else{
    lucro = valor * 0.3
    result = valor + lucro
    alert("O valor de venda para o produto é R$ " +result + ".");
}

//14
var sal, aumento, percent, salnovo;
sal = Number(prompt("Insira o valor do salário atual:"));

if (sal >= 0 && sal <= 400){
    aumento = "15%"
    percent = sal * 0.15
    salnovo = sal + percent
    alert("O salário após o aumento de " +aumento +" será R$ " +salnovo +".");
}

if (sal > 400 && sal <= 700){
    aumento = "12%"
    percent = sal * 0.12
    salnovo = sal + percent
    alert("O salário após o aumento de " +aumento +" será R$ " +salnovo +".");
}

if (sal > 700 && sal <= 1000){
    aumento = "10%"
    percent = sal * 0.1
    salnovo = sal + percent
    alert("O salário após o aumento de " +aumento +" será R$ " +salnovo +".");
}

if (sal > 1000 && sal <= 1800){
    aumento = "7%"
    percent = sal * 0.07
    salnovo = sal + percent
    alert("O salário após o aumento de " +aumento +" será R$ " +salnovo +".");
}

if (sal > 1800 && sal <= 2500){
    aumento = "5%"
    percent = sal * 0.05
    salnovo = sal + percent
    alert("O salário após o aumento de " +aumento +" será R$ " +salnovo +".");
}

if (sal > 2500){
    alert("O salário não teve aumento, portanto continua R$ " +sal +".");
}

if (sal < 0){
    alert("Não foi possível calcular o aumento, tente novamente com o valor correto.")
}

//15
var sal, val;
sal = Number(prompt("Insira o valor do salário bruto:"));
val = Number(prompt("Insira o valor da prestação:"));

if(val <= sal * 0.3){
    alert("O empréstimo pode ser concedido.");
}
else{
    alert("O empréstimo não pode ser concedido.");
}