//1 Nome completo
var nome;

function validarNome(){
    if(nome.indexOf(" ") !== -1){
        return true;
    }
    else{
        return false;
    }
}

function obterSobrenome(){
    nome = nome.split(" ");
    return nome[nome.length - 1].toLowerCase();
}

function contarVogais(){
    var vogais = 0;
    nome = nome.toString().toLowerCase();
    for(var i = 0; i < nome.length; i++){
        if(nome[i] == "a" || nome[i] == "e" || nome[i] == "i" || nome[i] == "o" || nome[i] == "u"){
            vogais += 1;
       }
   }
   if(vogais < 10){
       return "0" + vogais;
   }
   else if(vogais >= 100){
       return "+99";
   }
   else{
       return vogais;
   }
}

nome = prompt("Insira o nome completo do aluno:");
while(validarNome(nome) == false){
    nome = prompt("O nome inserido não foi como sendo um nome completo (nome e sobrenome(s)), por favor, tente novamente.\nInsira o nome completo do aluno:");
}

alert("A senha inicial do aluno é '" +obterSobrenome(nome) +contarVogais(nome) +"'.");

//2 Desconto da vacina
var valor, possuiconv, conv, taxa;

valor = prompt("Insira o preço da vacina:");
while(isNaN(valor)){
    valor = prompt("Evite qualquer indicador da moeda utilizada (R$, €, etc.), insira somente os números. Por favor, tente novamente.\nInsira o preço da vacina:");
}

possuiconv = prompt("O cliente possui algum convênio? (S/N)");
possuiconv = possuiconv.toString().toUpperCase();
while(possuiconv !== "S" && possuiconv !== "N" && possuiconv !== "SIM" && possuiconv !== "NÃO" && possuiconv !== "NAO"){
    possuiconv = prompt("Desculpe, mas não foi possível reconhecer sua resposta. Por favor, tente novamente\nO cliente possui algum convênio?");
    possuiconv = possuiconv.toString().toUpperCase();
}

if(possuiconv.trim().charAt(0) == "S"){
    conv = prompt("Insira o convênio:\n\n1 - Amigo dos Animais\n2 - Saúde Animal");
    while(conv !== "1" && conv !== "2"){
        conv = prompt("É preciso que seja inserido um dos NÚMEROS do respectivo convênio. Por favor, tente novamente.\nInsira o convênio:\n\n1 - Amigo dos Animais\n2 - Saúde Animal");
    }
}
else{
    conv = "0";
}

function calcularDesconto(valor, taxa){
    var desconto;
    desconto = valor * taxa / 100;
    return desconto;
}

if(conv == "0"){
    alert("O desconto será de 10% pois o cliente não possui convênio.");
    taxa = 10;
}
else if(conv == "1"){
    alert("O desconto será de 20% pois o cliente possui o convênio 'Amigo dos Animais'.");
    taxa = 20;
}
else if(conv == "2"){
    alert("O desconto será de 50% pois o cliente possui o convênio 'Saúde Animal'.");
    taxa = 50;
}

alert("O valor após aplicar o desconto de " +taxa +"%, foram descontados R$" +calcularDesconto(valor, taxa) +". Ou seja, o valor da vacina resulta em R$" +(valor - calcularDesconto(valor, taxa)) +".");

//3 Atleta de natação
var nome, idade;

nome = prompt("Insira o nome do atleta de natação:");
idade = prompt("Insira a idade do atleta de natação:");

function retornarTracos(){
    var tracos = "";
    for(var i = 0; i < nome.length; i++){
        if(nome.charAt(i) !== " "){
            tracos += "-";
        }
        else{
            tracos += " ";
        }
    }
    return tracos;
}

function categorizarAluno(){
    var categoria;
    if(idade <= 12){
        categoria = "Infantil";
    }
    else if(idade >= 13 && idade <= 18){
        categoria = "Juvenil";
    }
    else if(idade > 18){
        categoria = "Adulto";
    }
    return categoria;
}

alert(nome +"\n" +retornarTracos(nome) +"\n" +categorizarAluno(idade));

//4 Dano e Saúde
var dano, saude;

saude = prompt("Insira a saúde do personagem:");
while(isNaN(saude)){
    saude = prompt("A saúde do personagem precisa ser representada em NÚMEROS. Por favor, tente novamente.\nInsira a saúde do personagem:");
}

dano = prompt("Insira o dano aplicado ao personagem:");
while(isNaN(dano)){
    dano = prompt("O dano aplicado ao personagem precisa ser representada em NÚMEROS. Por favor, tente novamente.\nInsira o dano aplicado ao personagem:");
}

function combate(){
    if((saude - dano) <= 0){
        return true;
    }
    else{
        return false;
    }
}

if(combate(dano, saude) == true){
    alert(combate(dano,saude) +". O personagem morreu.");
}
else{
    alert(combate(dano, saude) +". O personagem sobreviveu lhe restando " +(saude - dano) +" pontos de vida.");
}

//5 Item "chave"
var itens = [];

for(var i = 0; i < 5; i++){
    itens[i] = prompt("Insira o item presente no " +(i+1) +" espaço da mochila:");
}

function temChave(){
    for(i = 0; i < itens.length; i++){
        if(itens[i].toLowerCase() == "chave"){
            return true;

        }
        else{
            return false;
        }
    }
}

if(temChave(itens) == true){
    alert(temChave(itens) +". O personagem pode atravessar a porta pois ele tem a chave na mochila.");
}
else{
    alert(temChave(itens) +". O personagem não pode atravessar a porta pois ele não tem a chave na mochila.");
}

//6 Posição: válida ou inválida, e correção
var posicao, correcao;

posicao = Number(prompt("Insira a posição em que o inimigo está na tela:"));
while(isNaN(posicao)){
    posicao = Number(prompt("A posição precisa ser representada por um NÚMERO, positivo ou negativo. Por favor, tente novamente. Insira a posição em que o inimigo está na tela:"));
}

function LimitaPosicao(){
    if(posicao >= 0 && posicao <= 100){
        return true;
    }
    else if(posicao < 0){
        correcao = 0;
        return false;
    }
    else{
        correcao = 100;
        return false;
    }
}

if(LimitaPosicao(posicao) == true){
    alert(LimitaPosicao(posicao) +", a posição " +posicao +" é válida.");
}
else{
    alert(LimitaPosicao(posicao) +", a posição " +posicao +" é inválida. O valor corrigido passa a ser " +correcao +".");
}