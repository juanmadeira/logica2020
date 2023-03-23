//1 Sequência de N números, ao contrário
var n, n1 = [], num;

n = prompt("Insira quantos números inteiros você irá digitar:");
while(n < 1 || n > 50 || isNaN(n)){
    n = prompt("Desculpe, mas preciso que você insira a quantidade de números inteiros que irá digitar novamente. Atente-se que é necessário que seja um número menor que 50.");
}

for(var i = 0; i < n; i++){
    num = parseInt(prompt("Insira o " +(i+1) +"° número:"));
    n1.push(" " +num);
    console.log(n1);
}

alert("Aqui está a sequência inserida, mas ao contrário:" +n1.reverse());

//2 Pontuação dos Times
var times, pts = [], maior1, empate = 0;

times = prompt("Insira o número de times nos quais suas pontuações serão contabilizadas:");
while(times < 2 || times > 50 || isNaN(times)){
    times = prompt("Desculpe, mas preciso que você insira o número de times novamente. Atente-se que o número mínimo necessário é 2 e o máximo é 50.");
}

for(var i = 0; i < times; i++){
    pts[i] = prompt("Insira quantos pontos marcou o " +(i+1) +"° time:");
}

maior1 = Math.max(...pts);
for(i = 0; i < times; i++){
alert(pts[i]+"pts")
    if(pts[i] == maior1){
        empate += 1;
        alert(+empate+"empate")
    }

}

if(empate == 2){
    alert("O time com maior pontuação marcou " +maior1 +" pontos, entretanto, mais " +(empate-1) +" time também ficou com a mesma quantidade de pontos.");
}
else if(empate >= 2){
    alert("O time com maior pontuação marcou " +maior1 +" pontos, entretanto, mais " +(empate-1) +" time(s) também ficaram com a mesma quantidade de pontos.");
}
else{
    alert("O time com maior pontuação marcou " +maior1 +" pontos.");
}

//3 Calcular média e números maiores que ela
var n = [], soma = 0, maiores = [];

for(var i = 0; i < 10; i++){
    n[i] = prompt("Insira aqui o " +(i+1) +"° de 10 números:");
    n[i] = Number(n[i]);
    soma += n[i];
}

media = soma / 10;

for(i = 0; i < 10; i++){
    n[i] = Number(n[i]);
    if(n[i] > media){
        maiores.push(" " +n[i]);
    }
}

if(maiores.length !== 0){
    alert("A média desses números resulta em " +media +", e os números que ultrapassam a média são:" +maiores +".");
}
else{
    alert("A média desses números resulta em " +media +".");
}

//4 Mostrar quantidade de números negativos e somar os positivos
var n = [], neg = 0, somapos = 0;

for(var i = 0; i < 10; i++){
    n[i] = prompt("Insira aqui o " +(i+1) +"° de 10 números:");
    n[i] = Number(n[i]);
    if(n[i] < 0){
        neg += 1;
    }
    else{
        somapos += n[i];
    }
}

alert("Foram inseridos " +neg +" números negativos.");

if(somapos !== 0){
    alert("A soma dos números positivos inseridos resulta " +somapos +".");
}
else{
    alert("A soma dos números positivos inseridos resulta zero.");
}

//5 Maior e menor elemento do vetor
var p = [], maior = "", menor = "", maiorpos, menorpos;

p[0] = prompt("Insira aqui a 1ª de 15 posições:");
maior = p[0];
maiorpos = 0;
menor = p[0];
menorpos = 0;

for(var i = 1; i < 15; i++){
    p[i] = prompt("Insira aqui a " +(i+1) +"ª de 15 posições:");

    if(p[i].length > maior.length){
        maior = p[i];
        maiorpos = i;
    }

    if(p[i].length < menor.length){
        menor = p[i];
        menorpos = i;
    }

}

alert("O maior elemento do vetor é '" +maior + "' e se encontra na posição posição " +maiorpos);
alert("O menor elemento do vetor é '" +menor + "' e se encontra na posição posição " +menorpos);

//6 Dois vetores com 10 posições, o terceiro vetor é a soma
var n1 = [], n2 = [], nsoma = [];

for(var i = 0; i < 10; i++){
    n1[i] = Number(prompt("Insira o " +(i+1) +"° de 10 números do primeiro grupo:"));
}

for(var i = 0; i < 10; i++){
    n2[i] = Number(prompt("Insira o " +(i+1) +"° de 10 números do segundo grupo:"));
}

for(var i = 0; i < 10; i++){
    nsoma[i] = Number(n1[i]) + Number(n2[i]);
}

nsoma = nsoma.join(", ");
alert("O terceiro grupo, somando os números de suas respectivas posições resulta: \n\n" +nsoma);

//7 Produto da variável pelo vetor
var n = [], a, prod = [];

for(var i = 0; i < 20; i++){
    n[i] = Number(prompt("Insira o " +(i+1) +"° de 20 números:"));
}

a = Number(prompt("Agora, insira qual o valor que irá multiplicar cada um dos números digitados anteriormente:"));

for(var i = 0; i < 20; i++){
    prod[i] = Number(n[i]) * Number(a);
}

prod = prod.join(", ");
alert("O resultado dos valores inseridos, respectivamente, pelo outro valor resulta: \n\n" +prod);

//8 Jogador mais alto do time de basquete e seu nome
var nome = [], altura = [];

for(var i = 0; i < 3; i++){
    nome[i] = prompt("Insira o " +(i+1) +"° de 12 jogadores:");
    altura[i] = Number(prompt("Insira a altura do " +(i+1) +"° jogador:"));
}

maiorNome = nome[0];
maiorAltura = altura[0];

for(i = 0; i < 3; i++){
    if(altura[i] > maiorAltura){
        maiorNome = nome[i];
        maiorAltura = altura[i];
    }
}

alert("O jogador mais alto é " +maiorNome +", com " +maiorAltura +"m.");

//9 Expressão com vetores nas mesmas posições
var n1 = [], n2 = [], n3 = [], nresult = [];

for(var i = 0; i < 5; i++){
    n1[i] = Number(prompt("Insira o " +(i+1) +"° de 5 números do primeiro grupo:"));
}

for(var i = 0; i < 5; i++){
    n2[i] = Number(prompt("Insira o " +(i+1) +"° de 5 números do segundo grupo:"));
}

for(var i = 0; i < 5; i++){
    n3[i] = Number(prompt("Insira o " +(i+1) +"° de 5 números do terceiro grupo:"));
}

for(var i = 0; i < 5; i++){
    nresult[i] = (Number(n1[i]) * Number(n3[i]) / Number(n2[i]));
}

nresult = nresult.join(", ");
alert("O quarto grupo, sendo o produto do primeiro grupo com o terceiro, dividido pelo segundo, em suas respectivas posições resulta: \n\n" +nresult);

//10 Separar pares e ímpares
var n = [], impar = [], par = [];

for(var i = 0; i < 30; i++){
    n[i] = Number(prompt("Insira o " +(i+1) +"° de 30 números para a verificação:"));
}

for(i = 0; i < 30; i++){
    if(par.length == 15){
        alert("Você atingiu o número máximo de pares (15).");
        break;
    }

    if(n[i] % 2 == 0){
        par.push(n[i]);
    }
}

for(i = 0; i < 30; i++){
    if(impar.length == 15){
        alert("Você atingiu o número máximo de ímpares (15).");
        break;
    }

    if(n[i] % 2 == 1){
        impar.push(n[i]);
    }
}

par = par.join(", ");
impar = impar.join(", ");

alert("Dentre os números inseridos, esses são os pares:\n" +par +"\n\nEnquanto esses são os ímpares:\n" +impar);

//11 Trocas de posições
var n = [], n2, rev;

for(var i = 0; i < 20; i++){
    n[i] = Number(prompt("Insira o " +(i+1) +"° de 20 números para a troca:"));
}

n2 = n.join(", ");
rev = n.reverse().join(", ");
alert("Os números inseridos foram: " +n2);
alert("Após a troca do primeiro pelo último, o segundo com o penúltimo e assim sucessivamente, fica: " +rev);

//12 Mega-sena
var a = [], b = [], neqs = 0, eqs = [];

for(var i = 0; i < 6; i++){
    a[i] = Number(prompt("Insira o " +(i+1) +"° de 6 números para o gabarito:"));
}

for(i = 0; i < 10; i++){
    b[i] = Number(prompt("Insira o " +(i+1) +"° de 10 números para sua aposta:"));
}

for(i = 0; i < 10; i++){

    if(a.indexOf(b[i]) !== -1){
        neqs += 1;
        eqs.push(b[i]);
    }

}

if(neqs == 0){
    alert("Sinto muito, mas você não fez nenhum ponto!\n\nO gabarito da Mega Sena era:\n" +a.join(", "));
}
else if(neqs == 1){
    alert("Sinto muito, mas você não fez pontos o suficiente para ganhar um prêmio!\n\nGabarito:\n" +a.join(", ") +"\n\nSeu acerto:\n" +eqs.join(", "));
}
else if(neqs >= 2 && neqs < 4){
    alert("Sinto muito, mas você não fez pontos o suficiente para ganhar um prêmio!\n\nGabarito:\n" +a.join(", ") +"\n\nSeus acertos:\n" +eqs.join(", "));
}
else if(neqs == 4){
    alert("Meus parabéns!!! Você marcou 4 pontos e por isso fez a Quadra.\n\nGabarito:\n" +a.join(", ") +"\n\nSeus acertos:\n" +eqs.join(", "));
}
else if(neqs == 5){
    alert("Meus parabéns!!! Você marcou 5 pontos e por isso fez a Quina.\n\nGabarito:\n" +a.join(", ") +"\n\nSeus acertos:\n" +eqs.join(", "));
}
else if(neqs == 6){
    alert("Meus parabéns!!! Você marcou 6 pontos e por isso ganhou a Mega Sena!\n\nGabarito:\n" +a.join(", ") +"\n\nSeus acertos:\n" +eqs.join(", "));
}