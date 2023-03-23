//1 Idade de Camila
var irmas = [], irmasU = [], irmasD = [], irmasC = [], ordem = [];

for(var i = 0; i < 3; i++){
    irmas[i] = prompt("Insira a idade da " +(i+1) +"° irmã:");
}

for(var i = 0; i < 3; i++){
    if(irmas[i].length == 1){
        irmasU.push(irmas[i]);
    }
    if(irmas[i].length == 2){
        irmasD.push(irmas[i]);
    }
    if(irmas[i].length == 3){
        irmasC.push(irmas[i]);
    }
}

irmasU.sort();
irmasD.sort();
irmasC.sort();
ordem = irmasU.concat(irmasD);
ordem = ordem.concat(irmasC);
ordem.shift();
ordem.pop();

alert("Camila (a irmã do meio) tem " +ordem +" anos.");

//2 Anagrama
var n, frase1 = [], frase2 = [], sort1 = [], sort2 = [];

n = prompt("Insira o número de caracteres presentes nas frases a serem comparadas:");
while(isNaN(n)){
    n = prompt("Insira o número de caracteres presentes nas frases a serem comparadas:\n(É preciso que seja o número seja representado em algarismos)");
}

frase1 = prompt("Insira a primeira frase a ser comparada:");
while(frase1.length != n){
    frase1 = prompt("É preciso que a frase inserida tenha a exata quantia de caracteres ditos anteriormente. Por favor, tente novamente.");
}
frase2 = prompt("Insira a segunda frase a ser comparada:");
while(frase2.length != n){
    frase2 = prompt("É preciso que a frase inserida tenha a exata quantia de caracteres ditos anteriormente. Por favor, tente novamente.");
}

frase1 = frase1.toUpperCase().replaceAll(" ", "");
frase2 = frase2.toUpperCase().replaceAll(" ", "");

for(var i = 0; i < n; i++){
    if(frase1.charAt(i) < "A" || frase1.charAt(i) > "Z"){
        frase1 = frase1.replaceAll(frase1.charAt(i), "");
    }
    if(frase2.charAt(i) < "A" || frase2.charAt(i) > "Z"){
        frase2 = frase2.replaceAll(frase2.charAt(i), "");
    }
}

sort1 = frase1.split("").sort().join("");
sort2 = frase2.split("").sort().join("");

alert(sort1);
alert(sort2);

if(sort1 == sort2){
    alert("Sim, as frases inseridas são anagramas uma da outra.");
}
else{
    alert("Não, as frases inseridas não são anagramas uma da outra.");
}

//3 Pesquisa de preços
var n, e = [], a = [], g = [], vantajoso = [];

n = prompt("Insira o número de estados em que a pesquisa foi realizada:");
while(n < 2 || isNaN(n)){
    n = prompt("Insira o número de estados em que a pesquisa foi realizada:\n(O número de estados precisa ser maior ou igual a 2, representado em algarismos. Por favor, tente novamente.)");
}

for(var i = 0; i < n; i++){
    e[i] = prompt("Insira o " +(i+1) +"° estado:");
}
for(i = 0; i < n; i++){
    a[i] = prompt("Insira o preço do litro de álcool no estado " +e[i] +":");
    g[i] = prompt("Agora, insira o preço do litro de gasolina no estado " +e[i] +":");
}
for(i = 0; i < n; i++){
    if((a[i] * 100 / g[i]) <= 70){
        vantajoso.push(e[i]);
    }
}

if(vantajoso.length == 0){
    alert("*");
}
else{
    alert(vantajoso.join(", "));
}