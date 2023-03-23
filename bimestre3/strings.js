//1 Pig Latin
var palavra, primeira;

palavra = prompt("Insira a palavra para transformá-la em Pig Latin:");
primeira = palavra.charAt(0); //primeira = primeira letra

alert("A palavra '" +palavra +"' transformada para Pig Latin é " +palavra.substr(1) +primeira +"ay.");

//2 Quantas vezes a letra aparece
var frase, letra, i, pos, vzs;

frase = prompt("Insira uma frase (ou palavra):");
letra = prompt("Insira uma letra:");
pos = 0;
vzs = 0;

for(i = 0; i < frase.length; i++){
    if(frase.charCodeAt(pos) == letra.charCodeAt(0)){
        vzs += 1;
    }
    pos += 1;
}

alert("A letra '" +letra +"' se repetiu na frase/palavra '" +frase +"' um total de " +vzs +" vezes.");

//3 Mínusculas, primeira letra em maiúsculo
var palavra, i, pos, acento;

palavra = prompt("Insira uma palavra sem acentos e cedilha:");
pos = 0;
acento = false;

for(i = 0; i < palavra.length; i++){
    if(palavra.charCodeAt(pos) >= "192" && palavra.charCodeAt(pos) <= "255"){
        acento = true
        break;
    }
    pos += 1;
}

if(acento == true){
    alert("A palvra contém acento ou cedilha. Tente novamente.");
}
else{
alert("A palavra " +palavra +" em letras minúsculas, mas com a primeira em maiúsculo, fica: " +palavra.charAt(0).toUpperCase() +palavra.toLowerCase().substr(1));
}

//4 (DD) NNNN-NNNN
var ddd, tel;

ddd = "";
tel = "";

ddd = String(prompt("Insira o código DDD de seu telefone:"));
tel = String(prompt("Insira o número de seu telefone:")); 

if (ddd.length !== 2 || (ddd.length !== 3 && ddd.charAt(0) == 0)){
    alert("O código DDD deve ter 2 ou 3 dígitos. Tente novamente.");
}

if(ddd.length == 3 && ddd.charAt(0) == 0){
    ddd = ddd.substr(1);
}

alert("O DDD e número de telefone inserido no formato (DD) NNNN-NNNN ficam:\n\n(" +ddd +") " +tel.substr(0,4) +"-" +tel.substr(4));

//5 (DD) NNNN-NNNN, válido ou não?
var n, i, pos, valido, ddd, num;

n = String(prompt("Insira o número de telefone no formato (DD) NNNN-NNNN:"));
n = n.replaceAll(" ", "");
pos = 0;

if(n.charAt(0) == "(" && n.charAt(3) == ")" && n.charAt(8) == "-"){
    valido = true
}
else{
    valido = false
}

if(valido == true){
ddd = n.charAt(1) + n.charAt(2);
num = n.charAt(4) + n.charAt(5) + n.charAt(6) + n.charAt(7) + n.charAt(9) + n.charAt(10) + n.charAt(11) + n.charAt(12);

alert("O DDD do número digitado é: " +ddd);
alert("O número de telefone digitado é: " +num);
}
else{
    alert("Opa, parece que o formato do número foi digitado errado. Tente novamente.");
}

//6 Plural em inglês
var palavra, plural, i , pos, y;

palavra = String(prompt("Insira uma palavra para gerar seu plural em inglês:"));

if(palavra.endsWith("o") || palavra.endsWith("ch") || palavra.endsWith("sh") || palavra.endsWith("ss") || palavra.endsWith("x") || palavra.endsWith("z")){
    plural = palavra + "es";
}
else if (palavra.endsWith("y")){
    plural = palavra.substr(0, palavra.lastIndexOf("y")) + "ies"
}
else{
    plural = palavra + "s";
}

alert("O plural da palavra " +palavra +", em inglês, é: " +plural.toLowerCase());

//7 Datas
var data1, data2, mes1, mes2;

data1 = String(prompt("Insira a data no formato DD/MM/AAAA:"));
mes1 = data1.substring(data1.indexOf("/"), data1.lastIndexOf("/"));

switch(mes1){
    case "/01":
    case "/1":
        mes2 = "janeiro";
        break;
    case "/02":
    case "/2":
        mes2 = "fevereiro";
        break;
    case "/03":
    case "/3":
        mes2 = "março";
        break;
    case "/04":
    case "/4":
        mes2 = "abril";
        break;
    case "/05":
    case "/5":
        mes2 = "maio";
        break;
    case "/06":
    case "/6":
        mes2 = "junho";
        break;
    case "/07":
    case "/7":
        mes2 = "julho";
        break;
    case "/08":
    case "/8":
        mes2 = "agosto";
        break;
    case "/09":
    case "/9":
        mes2 = "setembro";
        break;
    case "/10":
        mes2 = "outubro";
        break;
    case "/11":
        mes2 = "novembro";
        break;
    case "/12":
        mes2 = "dezembro";
        break;
}

data2 = data1.substr(0, data1.indexOf("/")) + " de " +mes2 +" de " +data1.substring((data1.lastIndexOf("/"))+1);
alert("A data " +data1 +", equivale à " +data2 +".");

//8 Data válida
var data, valido, soma, soma2, mes, maxdias;

data = String(prompt("Insira a data no formato DD/MM/AAAA:"));
valido = 0;

if(data.length == 10){
    valido += 1;
}
else{
    valido = 0;
}

if(data.charAt(2) == "/" || data.charAt(2) == "." || data.charAt(2) == "-"){
    valido += 1;
}
else{
    valido = 0;
}

if(data.charAt(5) == "/" || data.charAt(5) == "." || data.charAt(5) == "-"){
    valido += 1;
}
else{
    valido = 0;
}

soma = data.charAt(0) + data.charAt(1) + data.charAt(3) + data.charAt(4) + data.charAt(6) +data.charAt(7) + data.charAt(8) + data.charAt(9);
if(isNaN(parseInt(soma)) == false){
    valido += 1;
}
else{
    valido = 0;
}

mes = data.substring(data.indexOf("/"), data.lastIndexOf("/"));
switch(mes){
    case "/01":
        maxdias = 31;
        break;
    case "/02":
        maxdias = 28;
        break;
    case "/03":
        maxdias = 31;
        break;
    case "/04":
        maxdias = 30;
        break;
    case "/05":
        maxdias = 31;
        break;
    case "/06":
        maxdias = 30;
        break;
    case "/07":
        maxdias = 31;
        break;
    case "/08":
        maxdias = 31;
        break;
    case "/09":
        maxdias = 30;
        break;
    case "/10":
        maxdias = 31;
        break;
    case "/11":
        maxdias = 30;
        break;
    case "/12":
        maxdias = 31;
        break;
    default:
        valido = 0;
        break;
}

soma2 = parseInt(data.charAt(0) +data.charAt(1));
if(soma2 <= maxdias){
    valido += 1;
}
else{
    valido = 0;
}

if(valido == 5){
    alert("A data é valida!");
}
else{
    alert("A data não é válida. Tente novamente.");
}

//9 Palíndromo
var palavra, palin, i;

palavra = prompt("Insira a palavra/frase para verificar se é um palíndromo:");
palin = "";

for(i = 0; i <= palavra.length; i++){
    palin += palavra.charAt(palavra.length - i);
}

if(palin.replaceAll(" ", "").toUpperCase() == palavra.replaceAll(" ", "").toUpperCase()){
    alert("A palavra/frase " +palavra +" é um palíndromo.");
}
else{
    alert("A palavra/frase " +palavra +" não é um palíndromo.");
}

//10 Iniciais dos nomes
var nome, nome2, iniciais;

nome = prompt("Insira o nome e sobrenome:");
nome2 = nome

nome = nome.replaceAll(" e ", " ");
nome = nome.replaceAll(" do "," ");
nome = nome.replaceAll(" da "," ");
nome = nome.replaceAll(" dos "," ");
nome = nome.replaceAll(" das "," ");
nome = nome.replaceAll(" de "," ");
nome = nome.replaceAll(" di "," ");
nome = nome.replaceAll(" du "," ");

console.log(nome)
console.log(nome2)
iniciais = nome.charAt(0) + nome.charAt(nome.indexOf(" ") +1) +nome.charAt(nome.lastIndexOf(" ") +1);
alert("As iniciais do nome '" +nome2 +"' são: " +iniciais.toUpperCase() +".");