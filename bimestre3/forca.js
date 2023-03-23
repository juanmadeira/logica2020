// ———————————————————— Declaração de Variáveis ————————————————————

/* Legenda das variáveis:
dif = inserir dificuldade
    diff = palavras da dificuldade fácil
    difm = palavras da dificuldade médio
    difd = palavras da dificuldade difícil  
sort = sorteia uma virgula dentre todas da string de sua respectiva dificuldade
    sort2 = verifica onde está a próxima vírgula depois da sorteada
p = palavra sorteada
t1 = tentativa do jogador
pespaco = numero de espacos ("_") da palavra (underlines)
    pespaco2 = todos os underlines juntos, sem espaços entre eles
vida = vida do jogador (apresentada em corações)
certo = verifica se acertou a letra
erro = quantas vezes errou
    erradas = mostra as letras que o jogador inseriu, mas não pertencem à palavra  
tentadas = guarda as letras que o jogador tentou
opcoes = dar a opcao de dica, chutar ou desistir
    dicaabc = dica na qual diz em qual metade do alfabeto pertence
fim = decreta o fim do jogo (ou a continuidade dele)
    gg = vitoria do jogador
    dnv = "de novo", se o jogador irá tentar novamente ou não
*/

var dif, diff, difm ,difd, sort, sort2, p, t1, pespaco, pespaco2, vida, certo, erro, tentadas, erradas, opcoes, dicaabc, gg, fim, dnv;

//dificuldade fácil: 20 palavras de 4 letras 
diff = ",AMOR,ANEL,BALA,BOLA,CASA,COLA,COPO,CUBO,DOCE,FACA,FOTO,GALO,GATO,GELO,ILHA,JOGO,JOIA,MOLA,NAVE,RAIZ";
//dificuldade médio: 9 palavras de 5 letras e 11 palavras de 6 letras
difm = ",BEIJO,CAIXA,CARRO,CARTA,DISCO,LIVRO,PEIXE,PIANO,POEMA,ABELHA,AZEITE,BANANA,COELHO,ENIGMA,ESCOLA,HUMANO,LADINO,OCEANO,QUEIJO,VACINA";
//dificuldade difícil: 11 palavras de 7 letras, 6 palavras de 8 letras e 3 palavras de 9 letras
difd = ",ABACATE,BATERIA,CADERNO,CELULAR,EMPATIA,GARRAFA,MORCEGO,REFLEXO,RETRATO,SISTEMA,VIRTUAL,CHAFARIZ,CONTROLE,CRUZEIRO,GUITARRA,LANTERNA,PAPAGAIO,ALGORITMO,BICICLETA,ESTUDANTE";

// ———————————————————— Regras ————————————————————

dnv = "S";

while(dnv.toUpperCase() == "S"){

alert("   ———> Jogo da Forca\n\nSeja bem-vindo! Vamos às regras:\nO objetivo do jogo é descobrir qual é a palavra oculta, tentando letra por letra, de acordo com a quantidade de letras da palavra. Você pode cometer apenas 6 erros, após isso, perderá o jogo. Os corações são seus pontos de vida, não os perca caso queira vencer!");
dif = prompt("Certo, escolha a dificuldade:\n\nFácil: palavras de até 4 letras\nMédio: palavras de 5 a 6 letras\nDifícil: palavras com mais de 7 letras");

while(dif.trim().toUpperCase() !== "FÁCIL" && dif.trim().toUpperCase() !== "FACIL" && dif.trim().toUpperCase() !== "MÉDIO" && dif.trim().toUpperCase() !== "MEDIO" && dif.trim().toUpperCase() !== "DIFÍCIL" && dif.trim().toUpperCase() !== "DIFICIL"){
    dif = prompt("Não entendi qual a dificuldade que você escolheu, por favor tente novamente:\n\nFácil: palavras de até 4 letras\nMédio: palavras de 5 a 6 letras\nDifícil: palavras com mais de 7 letras");
}

// ———————————————————— Sorteio ————————————————————

if(dif.trim().toLowerCase() == "facil" || dif.trim().toLowerCase() == "fácil"){
    sort = diff.indexOf(",", diff.indexOf(",") + Math.floor(Math.random() * (95)));
    p = diff.charAt(sort + 1) + diff.charAt(sort + 2) + diff.charAt(sort + 3) + diff.charAt(sort + 4);
}

if(dif.toLowerCase() == "medio" || dif.toLowerCase() == "médio"){
    sort = difm.indexOf(",", difm.indexOf(",") + Math.floor(Math.random() * (122)));
    sort2 = difm.indexOf(",", sort + 1);

    if(sort2 - sort == 6 || sort == 0){
        p = difm.charAt(sort + 1) + difm.charAt(sort + 2) + difm.charAt(sort + 3) + difm.charAt(sort + 4) + difm.charAt(sort + 5);
    }
    else{
        p = difm.charAt(sort + 1) + difm.charAt(sort + 2) + difm.charAt(sort + 3) + difm.charAt(sort + 4) + difm.charAt(sort + 5) + difm.charAt(sort + 6);
    }

}

if(dif.toLowerCase() == "dificil" || dif.toLowerCase() == "difícil"){
    sort = difd.indexOf(",", difd.indexOf(",") + Math.floor(Math.random() * (162)));
    sort2 = difd.indexOf(",", sort + 1);

    if(sort2 - sort == 8 || sort == 0){
        p = difd.charAt(sort + 1) + difd.charAt(sort + 2) + difd.charAt(sort + 3) + difd.charAt(sort + 4) + difd.charAt(sort + 5) + difd.charAt(sort + 6) + difd.charAt(sort + 7);
    }
    else if(sort2 - sort == 9){
        p = difd.charAt(sort + 1) + difd.charAt(sort + 2) + difd.charAt(sort + 3) + difd.charAt(sort + 4) + difd.charAt(sort + 5) + difd.charAt(sort + 6) + difd.charAt(sort + 7) + difd.charAt(sort + 8);
    }
    else{
        p = difd.charAt(sort + 1) + difd.charAt(sort + 2) + difd.charAt(sort + 3) + difd.charAt(sort + 4) + difd.charAt(sort + 5) + difd.charAt(sort + 6) + difd.charAt(sort + 7) + difd.charAt(sort + 8) + difd.charAt(sort + 9);
    }

}

// ———————————————————— O Jogo ————————————————————

alert("Ok, dificuldade " +dif.trim().toUpperCase() +" escolhida. Vamos ao jogo!");

pespaco = "_ ".repeat(p.length);
vida = "VIDA: ♥ ♥ ♥ ♥ ♥ ♥";
erro = 0;
tentadas = "";
erradas = "";
opcoes = 0;
dicaabc = "";
fim = 0;
gg = 0;
dnv = "S";


while(fim == 0){

certo = 0;

t1 = prompt("Insira uma letra para verificar se encaixa em algum espaço vazio:\n\n " +pespaco +"\n\n" +erradas +"\n\n" +vida);

while(t1.length !== 1 || t1.length == 0 || t1.trim().toUpperCase().charCodeAt(0) < 65 || t1.trim().toUpperCase().charCodeAt(0) > 90){
    t1 = prompt("Opa, a letra não foi reconhecida, Tente novamente.\nInsira uma letra para verificar se encaixa em algum espaço vazio:\n\n " +pespaco +"\n\n" +erradas +"\n\n" +vida);
}

pespaco2 = pespaco.replaceAll(" ", "");

for(var i = 0; i < p.length; i++){
    if(t1.toUpperCase() == p.charAt(i)){
        pespaco2 = pespaco2.substring(0, i) +t1.toUpperCase() +pespaco2.substring(i + 1);
        pespaco = pespaco.substring(0, 2 * i) +t1.toUpperCase() +pespaco.substring(i * 2 + 1); 
        tentadas += t1.toUpperCase();
        certo += 1;

    }
    else{
        certo += 0;
    }
}

if(certo == 1){
    alert("Olha só, parece que a letra que você digitou aparece uma vez na palavra!");
}
else if(certo >= 2){
    alert("Muito bem, a letra que você digitou aparece " +certo +" vezes na palavra!");
}
else{
    erro += 1;
    if(erro !== 6.1){
        alert("Oops! A letra que você digitou não aparece nenhuma vez na palavra. Sinto muito, você perdeu uma vida.\nTente novamente!");
    }
    if(erro == 1){
        erradas = "Letras inseridas erradas: ";
    }
    erradas += t1 +"   ";
}

switch(erro){
    case 0:
        vida = "VIDA: ♥ ♥ ♥ ♥ ♥ ♥";
        break;
    case 1:
        vida = "VIDA: ♡ ♥ ♥ ♥ ♥ ♥";
        break;
    case 2:
        vida = "VIDA: ♡ ♡ ♥ ♥ ♥ ♥";
        break;
    case 3:
        vida = "VIDA: ♡ ♡ ♡ ♥ ♥ ♥";
        break;
    case 4.1:
        vida = "VIDA: ♡ ♡ ♡ ♡ ♥ ♥";
        break;
    case 5.1:
        vida = "VIDA: ♡ ♡ ♡ ♡ ♡ ♥";
        break;
    case 6.1:
        vida = "VIDA: ♡ ♡ ♡ ♡ ♡ ♡";
        break;
}

if(erro == 3){
    opcoes = prompt("Ok... pelo visto você está tendo dificuldade. É o seguinte: vou te deixar escolher entre uma dica, chutar a palavra logo de uma vez ou desistir de tudo.\n (Lembre-se que se decidir chutar a palavra e errar, o jogo acabará imediatamente. É tudo ou nada.)\n\nO que você escolhe?\n1. Dica\n2. Chutar a palavra\n3. Desistir");
    erro = 3.1;
    while(opcoes !== "1" && opcoes !== "2" && opcoes !== "3"){
        opcoes = prompt("Por favor, escolha uma das opções digitando 1, 2 ou 3.\n\nO que você escolhe?\n1. Dica\n2. Chutar a palavra\n3. Desistir");
    }

    if(opcoes == 1){
        dicaabc = p.charAt(pespaco2.indexOf("_"));
        if(dicaabc.toUpperCase() >= "A" && dicaabc.toUpperCase() < "N"){
            dicaabc = "primeira";
        }
        else{
            dicaabc = "segunda";
        }
        alert("Quer uma dica, então? Ok, acho que saber que a próxima letra faltante pertence à " +dicaabc +" metade do alfabeto pode te ajudar.");
    }

    if(opcoes == 2){
        chute = prompt("Ok, você escolheu chutar a palavra. Vá em frente, pode digitar a palavra completa.");
        if(chute.trim().toUpperCase() == p){
            dnv = prompt("Parabéns! Você chutou certo e ganhou o jogo, a palavra realmente era " +p +", muito bem! Deseja jogar novamente? (S/N)");
            while(dnv.toUpperCase() !== "S" && dnv.toUpperCase() !== "N" && dnv.toUpperCase() !== "SIM" && dnv.toUpperCase() !== "NÃO" && dnv.toUpperCase() !== "NAO"){
                dnv = prompt("Opa, não entendi o que você quis dizer. Deseja jogar novamente? (S/N)");
            }
            if(dnv.toUpperCase() == "SIM"){
                dnv = "S";
            }
            else if(dnv.toUpperCase() == "NÃO" || dnv.toUpperCase() == "NAO"){
                dnv = "N";
            }
            fim = 1;
        }
        else{
            alert("Poxa, infelizmente a palavra não era "+chute.trim().toUpperCase() +", mas sim " +p +". Obrigado por jogar!");
            dnv = prompt("Deseja jogar novamente? (S/N)");
            while(dnv.toUpperCase() !== "S" && dnv.toUpperCase() !== "N" && dnv.toUpperCase() !== "SIM" && dnv.toUpperCase() !== "NÃO" && dnv.toUpperCase() !== "NAO"){
                dnv = prompt("Opa, não entendi o que você quis dizer. Deseja jogar novamente? (S/N)");
            }
            if(dnv.toUpperCase() == "SIM"){
                dnv = "S";
            }
            else if(dnv.toUpperCase() == "NÃO" || dnv.toUpperCase() == "NAO"){
                dnv = "N";
            }
            fim = 1;
        }
    }

    if(opcoes == 3){
        alert("Desistir? Tudo bem, só espero que o jogo não tenha ficado tão ruim assim. Até a próxima, e obrigado por jogar!");
        alert("Ah, antes disso, tenho de lhe contar... a palavra era " +p +".");
        fim = 1;
        gg = 0;
        dnv = "N";
    }

}

if(erro == 6.1){
    fim = 1;
    gg = 2;
}
if(pespaco.replaceAll(" ", "").toUpperCase() == p.toUpperCase()){
    fim = 1;
    gg = 1;
}

}

// ———————————————————— Fim ————————————————————

if(gg == 1){
    dnv = prompt("Parabéns, você venceu o Jogo da Forca! Você acertou todas as letras para, então, descobrir que a palavra era " +p +".\n\nDeseja jogar novamente? (S/N)");
}
else if(gg == 2){
    dnv = prompt("Sinto muito, mas suas vidas acabaram... você perdeu o jogo! A palavra oculta era " +p +".\n\nDeseja jogar novamente? (S/N)");
}

while(dnv.toUpperCase() !== "S" && dnv.toUpperCase() !== "N" && dnv.toUpperCase() !== "SIM" && dnv.toUpperCase() !== "NÃO" && dnv.toUpperCase() !== "NAO"){
    dnv = prompt("Opa, não entendi o que você quis dizer. Deseja jogar novamente? (S/N)");
}
if(dnv.toUpperCase() == "SIM"){
    dnv = "S";
}
else if(dnv.toUpperCase() == "NÃO" || dnv.toUpperCase() == "NAO"){
    dnv = "N";
}

}