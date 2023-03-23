//1
var ano1, ano2, result;
ano1 = parseInt(prompt("Insira o ano inicial:"));
ano2 = parseInt(prompt("Insira o ano final:"));
result = "";

while(ano1 <= ano2){

    if(ano2 % 4 == 0){
    result += ano2 + "\n";
    }

    --ano2;

}

alert("Dentro dessa faixa,\n\n" +result +"\nsão anos bissextos.");

//2
var n, contador, soma, media;
contador = 1;
soma = 0;
media = 0;

while(contador <= 10){

    n = Number(prompt("Insira o número:"));
    soma += n;
    ++contador;

}

media = soma / 10;
alert("A soma dos dez números inseridos resulta " +soma +" e a média aritmética se dá " +media +".");

//3
var n, par;
n = 1;
par = "";

while(n != 0){

    n = Number(prompt("Insira os números:\nQuando desejar ver o resultado, digite o número 0."));

    if(n % 2 == 0){
        par += n + "\n";
    }

}

alert("Os números pares são:\n\n" +par);

//4
var n, divisor;
n = parseInt(prompt("Insira um número inteiro positivo:"));
divisor = 2;

if(n == 1){
    alert("O número não é primo.");
}
else{

while(n % divisor != 0){
    divisor++;
    
}   

}

if(n == divisor){
    alert("O número é primo.");
}

else if (n != divisor && n != 1){
    alert("O número não é primo.");
}

//5
var n, ndg, ndg2, ni, np, impares, pares;
n = parseInt(prompt("Insira um número inteiro positivo:"));

ndg = n;
ndg2 = n

ni = 1;
np = n;

impares = "";
pares = "";

while(ni <= n){

    if(ndg % 2 != 0){
        impares += ni +"\n";
    }

    ni += 2;

}

alert("Os números ímpares de 0 até " +n +" são\n\n" +impares);

while(ndg2 >= 0){
    
    if(ndg2 % 2 == 0){
        pares += ndg2 +"\n";
    }

    --ndg2;

}

alert("Os números pares de " +np +" até 0 são:\n\n" +pares);

//6
var cafe, cafeina;
cafeina = 0
cafe = "Sim"

while(cafe == "Sim" || cafe == "sim"){

    cafe = String(prompt("Tem café? (Sim/Não)"));

    if(cafe == "Sim" || cafe == "sim"){
        ++cafeina;
        alert("O programador tomou café.");
    }

}

alert("O programador tomou " +cafeina +" copos de café.");