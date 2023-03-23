//1
var n, c, total;
c = 1;
total = 0;

while(c <= 10){
    n = Number(prompt("Insira um número:"));
    total += n;
    c++;
}

alert("A soma dos dez números inseridos é " +total +".");

//2
var n, dnv, vzs, somat, quad, media;
vzs = 0;
somat = 0;
quad = 0;
media = 0;

do{
    n = parseInt(prompt("Insira um número inteiro "));
    somat += n;
    quad += Math.pow(n, 2);
    vzs++
    media = somat / vzs;
    dnv = prompt("Deseja inserir outro número? (S/N)");
} while(dnv == "S" || dnv == "s");

alert("O somatório dos números inseridos é " +somat +", enquanto a soma dos quadrados é " +quad +" e a média dos " +vzs +" números inseridos é " +media +".");

//3
var n;
n = 0

while(n >= 0){
    n = prompt("Insira um número:");
    if(n >= 0){
    alert("O quadrado do número inserido é " +Math.pow(n, 2) +".");
    }
}

if(n < 0){
    alert("O número inserido é negativo. Programa encerrado.");
}

//4
var x, result;
x = 1;
result = 0;

while(x != 0){
    x = Number(prompt("Insira um valor para x:"));
    result = Math.pow(x, 2) - x*5 + 6;
    if(x != 0){
    alert("Quando x é igual a " +x +", a função tem resultado: " +result +".");
    }
}

if(x == 0){
    alert("O número inserido é zero. Programa encerrado.");
}

//5
var prod, prodall, val, quant, total, dnv;
val = 0;
quant = 0;
total = 0;
prodall = "";

do{
    prod = String(prompt("Insira o nome da mercadoria:"));
    val = Number(prompt("Insira o preço da mercadoria, em R$:"));
    quant = Number(prompt("Insira a quantidade total de vendas dessa mercadoria:"));

    prodall += prod +";\n"; //prodall = todos os produtos, juntos em uma só var
    total += val * quant;

    dnv = prompt("Deseja inserir outra mercadoria? (S/N)");
} while(dnv == "S" || dnv == "s");

alert("Essas foram as mercadorias inseridas:\n\n" +prodall +"\nApós somar o valor de cada mercadoria, o faturamento total mensal do armazém fica: R$" +total +".");

//6
var n, quad, quadtotal;
n = 15;
quad = 0;
quadtotal = "";

while (n >= 15 && n <= 200){
    quad = Math.pow(n, 2);
    quadtotal += quad +";\n";
    n++
}

alert("Os quadrados inteiros de 15 a 200 são:\n\n" +quadtotal);

//7
var n, c, prod, prodfinal, tabuada;
n = 0;
prod = 0;
prodfinal = "";
tabuada = "";

n = Number(prompt("Insira o número no qual deseja ver a tabuada:"));

for(c = 1; c <= 10; c++){
    prod = n * c
    prodfinal = n +" x " +c +" = " +prod;
    tabuada += prodfinal +"\n";
}

alert("A tabuada do número " +n +" é:\n\n" +tabuada);

//8
var c, somat;
somat = 0;

for(c = 1; c <= 500; c++){
    if(c % 2 == 0){
        somat += c;
    }
}

alert("O somatório dos valores pares de 1 até 500 é " +somat);

//9
var c, imp;
imp = "";

for(c = 0; c <= 20; c++){
    if(c % 2 !== 0){
        imp += c +"\n";
    }
}

alert("Os valores números inteiros ímpares entre 0 e 20 são: \n\n" +imp);

//10
var c, exp, expfinal, val;
val = "";

for(c = 0; c <= 15; c++){
    exp = Math.pow(3, c);
    expfinal = "3 elevado à " +c +": " +exp;
    val += expfinal +"\n";
}

alert("Os resultados das potências de 3 são:\n" +val);

//11
var n, c, result, fato;
n = Number(prompt("Insira o número para calcular seu fatorial:"));
result = 1;
fato = 1;

for(c = 1; c <= n; c++){
    fato *= c;
}

alert("O resultado de " +n +"! é: " +fato +".");

//12
var n, c, h;
n = Number(prompt("Insira o número para ser o denominador:"));
h = 0;

for(c = 1; c <= n; c++){
    h += 1/c;
}

alert("O resultado de H é: " +h.toFixed(2) +".");