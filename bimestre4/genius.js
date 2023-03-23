// ———————————————————— Declaração de Variáveis ————————————————————

/* Legenda das variáveis:
dif = escolha da dificuldade
genius = string com as cores que serão apresentadas em formato de cruz
    geniusPadrao = auxiliar que copia as cores na formação original
nMin, nMax = mínimo e o máximo de números que serão aleatorizados na função aleatorizarNum
    numAleatorio = números aleatórios entre o mínimo e o máximo pré-definidos na função aleatorizarNum
    seqAleatoria = sequência aleatorizada na função aleatorizarNum
pts = pontuação
rodada = número da rodada atual
vzs = número de vezes que serão alteradas as cores por rodada (aumenta conforme o jogo progride)
resp = resposta do usuário conforme seu palpite de sequência
gg = determina se o jogador ganhou ou não
fim = determina o fim (ou continuação) do jogo
dnv = determina se o jogador irá jogar novamente
*/

var dif, genius, geniusPadrao, numAleatorio, seqAleatoria, nMin, nMax, pts, rodada, vzs, resp, gg, fim, dnv;

// ———————————————————— Funções ————————————————————

//aleatoriza um número de acordo com o mínimo e o máximo de cores inseridas
function aleatorizarNum(nMin, nMax){
    numAleatorio = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
    return numAleatorio;
}

// ———————————————————— Regras e Dificuldade ————————————————————

do{

alert("\n         Trabalho Final - GENIUS\n        Juan Madeira - Turma 1C");
alert("         SEJA BEM-VINDO(A) AO GENIUS!\n\n     O jogo consiste em memorizar uma sequência de cores que será apresentada na tela. Após ser executada, o jogador deve reproduzi-la por meio da caixa de mensagem.\n\n     Sua dificuldade varia de acordo com quantas rodadas o jogador será capaz de ganhar, quanto maior sua pontuação, mais será provado o quão bom é sua memória. Tome cuidado, com apenas um erro, fim de jogo!");
dif = prompt("Vamos lá, escolha a dificuldade!\n\n1. Infinito: Modo original, o jogo só acaba quando o jogador cometer um erro (endless)\n---------------------------------------------\n2. Fácil: Até 5 rodadas sem cometer erros\n3. Médio: Até 10 rodadas sem cometer erros\n4. Difícil: Até 15 rodadas sem cometer erros");
while(dif.trim().toUpperCase() !== "1" && dif.trim().toUpperCase() !== "FÁCIL" && dif.trim().toUpperCase() !== "FACIL" && dif.trim().toUpperCase() !== "2" && dif.trim().toUpperCase() !== "MÉDIO" && dif.trim().toUpperCase() !== "MEDIO" && dif.trim().toUpperCase() !== "3" && dif.trim().toUpperCase() !== "DIFÍCIL" && dif.trim().toUpperCase() !== "DIFICIL" && dif.trim().toUpperCase() !== "4" && dif.trim().toUpperCase() !== "INFINITO"){
    dif = prompt("Não entendi qual você escolheu, lembre-se de digitar o NÚMERO correspondente à dificuldade. Por favor, tente novamente:\n\n1. Infinito: Modo original, o jogo só acaba quando o jogador cometer um erro (endless)\n---------------------------------------------\n2. Fácil: Até 5 rodadas sem cometer erros\n3. Médio: Até 10 rodadas sem cometer erros\n4. Difícil: Até 15 rodadas sem cometer erros");
}

if(dif.trim().toUpperCase() == "1" || dif.trim().toUpperCase() == "INFINITO"){
    dif = "INFINITO";
}
else if(dif.trim().toUpperCase() == "2" || dif.trim().toUpperCase() == "FÁCIL" || dif.trim().toUpperCase() == "FACIL"){
    dif = "FÁCIL";
}
else if(dif.trim().toUpperCase() == "3" || dif.trim().toUpperCase() == "MÉDIO" || dif.trim().toUpperCase() == "MEDIO"){
    dif = "MÉDIO";
}
else if(dif.trim().toUpperCase() == "4" || dif.trim().toUpperCase() == "DIFÍCIL" || dif.trim().toUpperCase() == "DIFICIL"){
    dif = "DIFÍCIL";
}

genius = "           🔴¹\n    🔵²        🟢³\n           🟡⁴";
geniusPadrao = genius;
nMin = 1;
nMax = 4;
seqAleatoria = "";
pts = 0;
rodada = 1;
vzs = 1;
gg = false;
fim = false;
dnv = "";

// ———————————————————— O Jogo ————————————————————

alert("Dificuldade " +dif +" escolhida. O jogo irá começar!");
alert("Observe a sequência atentamente:\n(Pressione a tecla ENTER ou OK para avançar)\n\n" +genius);

do{

seqAleatoria += aleatorizarNum(nMin,nMax); //coleta um número aleatório (que corresponde à uma cor) da função aleatorizarNum e concatena 

for(var i = 0; i < vzs; i++){

    genius = geniusPadrao;

    if(seqAleatoria[i] == 1){
        genius = genius.replace("🔴¹", "🟥¹"); //caso o número aleatório da função aleatorizarNum seja 1, modifica a cor vermelha
    }
    else if(seqAleatoria[i] == 2){
        genius = genius.replace("🔵²", "🟦²"); //caso o número aleatório da função aleatorizarNum seja 2, modifica a cor azul
    }
    else if(seqAleatoria[i] == 3){
        genius = genius.replace("🟢³", "🟩³"); //caso o número aleatório da função aleatorizarNum seja 3, modifica a cor verde
    }
    else if(seqAleatoria[i] == 4){
        genius = genius.replace("🟡⁴", "🟨⁴"); //caso o número aleatório da função aleatorizarNum seja 4, modifica a cor amarela
    }

    alert("Observe a sequência atentamente:\n(Pressione a tecla ENTER ou OK para avançar)\n\n" +genius);
    alert("Observe a sequência atentamente:\n(Pressione a tecla ENTER ou OK para avançar)\n\n" +geniusPadrao);
}

resp = prompt("Preparado? Digite a sequência que foi apresentada.\n\n" +geniusPadrao +"\n\nATENÇÃO! Ao invés de digitar o nome das cores, digite o número correspondente à elas: (Exemplo: '1332' ou '1, 3, 3, 2')\n1. Vermelho\n2. Azul\n3. Verde\n4. Amarelo");
resp = resp.replaceAll(" ", "");    // remove caracteres como espaço,
resp = resp.replaceAll(",", "");    // virgula,
resp = resp.replaceAll(".", "");    // e pontos finais 

//pede para digitar a resposta novamente caso encontre algum número maior que 4 (cor amarela) ou menor que 1 (cor vermelha)
for(i = 0; i < resp.length; i++){
    while(resp.charAt(i) > 4 || resp.charAt(i) < 1){
        resp = prompt("Algo deu errado! Por favor, verifique se está digitando de maneira apropriada.\n\n" +geniusPadrao +"\n\nATENÇÃO! Ao invés de digitar o nome das cores, digite o número correspondente à elas: (Exemplo: '1332' ou '1, 3, 3, 2')\n1. Vermelho\n2. Azul\n3. Verde\n4. Amarelo");
    }
}
//pede para digitar a resposta novamente caso encontre algum caractere não-numérico ou resposta vazia
while(isNaN(resp) || resp.trim() === ""){
    resp = prompt("Algo deu errado! Por favor, verifique se está digitando de maneira apropriada.\n\n" +geniusPadrao +"\n\nATENÇÃO! Ao invés de digitar o nome das cores, digite o número correspondente à elas: (Exemplo: '1332' ou '1, 3, 3, 2')\n1. Vermelho\n2. Azul\n3. Verde\n4. Amarelo");
}

//determina o fim do jogo caso o jogador vença o modo FÁCIL
if(resp.trim() == seqAleatoria && dif == "FÁCIL" && pts == 4){
    pts += 1;
    alert("Parabéns! Você completou a 5ª rodada com sucesso.\n\nPontuação: " +pts);
    gg = true;
    fim = true;
}

//determina o fim do jogo caso o jogador vença o modo MÉDIO
else if(resp.trim() == seqAleatoria && dif == "MÉDIO" && pts == 9){
    pts += 1;
    alert("Parabéns! Você completou a 10ª rodada com sucesso.\n\nPontuação: " +pts);
    gg = true;
    fim = true;
}

//determina o fim do jogo caso o jogador vença o modo DIFÍCIL
else if(resp.trim() == seqAleatoria && dif == "DIFÍCIL" && pts == 14){
    pts += 1;
    alert("Parabéns! Você completou a 15ª rodada com sucesso.\n\nPontuação: " +pts);
    gg = true;
    fim = true;
}

//finaliza qualquer outra rodada em que não seja a última
else if(resp.trim() == seqAleatoria){
    pts += 1;
    alert("Muito bem! Você completou a " +rodada +"ª rodada com sucesso.\n\nPontuação: " +pts);
}
//finaliza o jogo caso o jogador cometa qualquer erro ao digitar a sequência e a dificuldade for INFINITO
else if(dif == "INFINITO"){
    alert("Oh, não! A sequência não era essa! O jogo foi finalizado na " +rodada +"ª rodada.\n\nPontuação: " +pts);
    gg = false;
    fim = true;
}
//finaliza o jogo caso o jogador cometa qualquer erro ao digitar a sequência
else{
    alert("Oh, não! A sequência não era essa! Você PERDEU O JOGO na " +rodada +"ª rodada.\n\nPontuação: " +pts);
    gg = false;
    fim = true;
}

rodada++; //aumenta +1 no número de rodadas
vzs++; //aumenta +1 no número de vezes que uma cor se altera
} while(fim === false); //interrompe o while caso o fim seja true, finalizando o jogo

// ———————————————————— Finalização ————————————————————

if(dif === "INFINITO"){ //caso o jogador tenha escolhido o modo infinito, conclui o jogo sem dizer que perdeu ou ganhou a dificuldade, e em seguida dá a opção de jogar novamente
    dnv = prompt("Obrigado por jogar! Você terminou na rodada " +(rodada - 1) +", finalizando com " +pts +" pontos o modo INFINITO. Continue praticando para alcançar uma pontuação ainda melhor!\n\nDeseja jogar novamente?\n1. Sim\n2. Não");
}
else if(gg === true){ //caso o jogador tenha vencido o jogo, parabeniza e dá a opção de jogar novamente
    dnv = prompt("Obrigado por jogar! Você terminou o jogo sendo vencedor da dificuldade " +dif +" e provou ser ótimo em memorizar " +(rodada - 1) +" rodadas do jogo Genius.\n\nDeseja jogar novamente?\n1. Sim\n2. Não");
}
else if(gg === false){ //caso o jogador tenha perdido o jogo, lamenta e dá a opção de jogar novamente
    dnv = prompt("Obrigado por jogar! Infelizmente você não completou a dificuldade " +dif +", pois marcou apenas " +pts +" pontos. Continue praticamndo para alcançar uma pontuação melhor!\n\nDeseja jogar novamente?\n1. Sim\n2. Não");
}

while(dnv !== "1" && dnv !== "2" && dnv.toUpperCase() !== "SIM" && dnv.toUpperCase() !== "NÃO" && dnv.toUpperCase() !== "NAO"){
    dnv = prompt("Não entendi qual você escolheu. Por favor, verifique se está selecionando uma das opções corretamente.\n\nDeseja jogar novamente?\n1. Sim\n2. Não");
}

//converte a resposta do jogador referente à variavel "dnv" para valor booleano
if(dnv == "1" || dnv.toUpperCase() == "SIM"){
    dnv = true;
}
else{
    dnv = false;
}

if(dnv === true){ //mensagem que assegura o jogador que o jogo foi de fato reiniciado
    alert("Ok! Reiniciando o jogo...");
}
else{ //mensagem que assegura o jogador que o jogo foi de fato concluído
    alert("Ok! Fechando o jogo...");
}

} while(dnv === true);