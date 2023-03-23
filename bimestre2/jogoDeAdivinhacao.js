var modo, n, try1, try2, try3, sco, dnv;
modo = String(prompt("Bem-vindo(a) ao jogo de adivinhação de número! \nInsira a dificuldade em que deseja jogar: \n\nFácil (Será sorteado um número de 1 a 10) \nMédio (Será sorteado um número de 1 a 25) \nDifícil (Será sorteado um número de 1 a 50)"));

if(modo == "Fácil" || modo == "Facil" || modo == "fácil" || modo == "facil" || modo == "FACIL" || modo == "FÁCIL"){

    n = Number(Math.floor(Math.random() * 10) + 1);

    alert("O sistema de pontuação do jogo funcionará da seguinte forma: \n\nCaso acerte na primeira tentativa: 10 pontos. \nCaso acerte apenas na segunda tentativa: 7 pontos. \nCaso acerte na terceira (e última) tentativa: 3 pontos. \nCaso não acerte em nenhuma das três tentativas: 0 pontos.");

    alert("Dificuldade fácil escolhida!");

    try1 = Number(prompt("Número aleatório escolhido! Você ganhará mais pontos se acertar o quanto antes. \nAgora, qual número você supõe que tenha sido sorteado?"));

    if(try1 == n){

        sco = 10;
        alert("Parabéns! Você acertou na primeira tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos. Pontuação máxima atingida!");
        dnv = 0
    }
    else{
        sco = 0;
        alert("Infelizmente, o número não era esse. :( \n\nA primeira tentativa foi finalizada com " +sco +" pontos.");
        dnv = 1;

    }

    if (dnv == 1){

        alert("Não perca a esperança, você ainda tem mais duas tentativas!");

        if(n % 2 == 0){
            alert("Dica: o número é par!");
        }
        else{
            alert("Dica: o número é ímpar!");
        }

        try2 = Number(prompt("Qual número foi sorteado?"));
        
        if(try2 == n){
            sco = 7;
            alert("Parabéns! Você acertou na segunda tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }
        else{
            sco = 0;
            alert("Oops! O número que você digitou não foi o mesmo sorteado. \n\nA segunda tentativa foi finalizada com " +sco +" pontos.");
            dnv = 2;
        }
    }

    if(dnv == 2){

        alert("Ok, última chance!");

        if(n > 5){
            alert("Segunda dica: o número é maior que 5.");
        }
        else{
            alert("Segunda dica: o número é menor que 6.");
        }

        try3 = Number(prompt("Então... qual é o número?"));

        if(try3 == n){
            sco = 3;
            alert("Parabéns! Você acertou na última tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }
        else{
            sco = 0;
            alert("Poxa, que pena, não foi dessa vez. O número era " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }

    }

}

else if(modo == "Médio" || modo == "Medio" || modo == "médio" || modo == "medio" || modo == "MEDIO" || modo == "MÉDIO"){
    
    n = Number(Math.floor(Math.random() * 25) + 1);

    alert("O sistema de pontuação do jogo funcionará da seguinte forma: \n\nCaso acerte na primeira tentativa: 10 pontos. \nCaso acerte apenas na segunda tentativa: 7 pontos. \nCaso acerte na terceira (e última) tentativa: 3 pontos. \nCaso não acerte em nenhuma das três tentativas: 0 pontos.");

    alert("Dificuldade médio escolhida!");

    try1 = Number(prompt("Número aleatório escolhido! Você ganhará mais pontos se acertar o quanto antes. \nAgora, qual número você supõe que tenha sido sorteado?"));

    if(try1 == n){

        sco = 10;
        alert("Parabéns! Você acertou na primeira tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos. Pontuação máxima atingida!");
        dnv = 0
    }
    else{
        sco = 0;
        alert("Infelizmente, você não acertou. :( \n\nA primeira tentativa foi finalizada com " +sco +" pontos.");
        dnv = 1;

    }

    if (dnv == 1){

        alert("Fique tranquilo, você ainda tem mais duas tentativas!");

        if(n % 2 == 0){
            alert("Dica: o número é par!");
        }
        else{
            alert("Dica: o número é ímpar!");
        }

        try2 = Number(prompt("Qual número foi sorteado?"));
        
        if(try2 == n){
            sco = 7;
            alert("Parabéns! Você acertou na segunda tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }
        else{
            sco = 0;
            alert("Ah, não! É uma pena, mas você errou novamente. \n\nA segunda tentativa foi finalizada com " +sco +" pontos.");
            dnv = 2;
        }
    }

    if(dnv == 2){

        alert("Ok, última chance!");

        if(n > 13){
            alert("Segunda dica: o número é maior que 13.");
        }
        else{
            alert("Segunda dica: o número é menor que 14.");
        }

        try3 = Number(prompt("Então... qual é o número?"));

        if(try3 == n){
            sco = 3;
            alert("Parabéns! Você acertou na última tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }
        else{
            sco = 0;
            alert("Poxa, acabaram-se as chances, o número não era " +try3 +", mas sim " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }

    }

}

else if(modo == "Difícil" || modo == "Dificil" || modo == "difícil" || modo == "dificil" || modo == "DIFICIL" || modo == "DIFÍCIL"){
    
    n = Number(Math.floor(Math.random() * 50) + 1);
    
    alert("O sistema de pontuação do jogo funcionará da seguinte forma: \n\nCaso acerte na primeira tentativa: 10 pontos. \nCaso acerte apenas na segunda tentativa: 7 pontos. \nCaso acerte na terceira (e última) tentativa: 3 pontos. \nCaso não acerte em nenhuma das três tentativas: 0 pontos.");
    
    alert("Dificuldade difícil escolhida!");

    try1 = Number(prompt("Número aleatório escolhido! Você ganhará mais pontos se acertar o quanto antes. \nAgora, qual número você supõe que tenha sido sorteado?"));

    if(try1 == n){

        sco = 10;
        alert("Parabéns! Você acertou na primeira tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos. Pontuação máxima atingida!");
        dnv = 0
    }
    else{
        sco = 0;
        alert("Bah, sinto muito, mas o número não era " +try1 +".\n\nA primeira tentativa foi finalizada com " +sco +" pontos.");
        dnv = 1;

    }

    if (dnv == 1){

        alert("Não perca a esperança, você ainda tem mais duas tentativas!");

        if(n % 2 == 0){
            alert("Dica: o número é par!");
        }
        else{
            alert("Dica: o número é ímpar!");
        }

        try2 = Number(prompt("Qual número foi sorteado?"));
        
        if(try2 == n){
            sco = 7;
            alert("Parabéns! Você acertou na segunda tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }
        else{
            sco = 0;
            alert("Lamentávelmente, você errou. \n\nA segunda tentativa foi finalizada com " +sco +" pontos.");
            dnv = 2;
        }
    }

    if(dnv == 2){

        alert("Ok, última chance!");

        if(n > 25){
            alert("Segunda dica: o número é maior que 25.");
        }
        else{
            alert("Segunda dica: o número é menor que 26.");
        }

        try3 = Number(prompt("Então... qual é o número?"));

        if(try3 == n){
            sco = 3;
            alert("Parabéns! Você acertou na última tentativa. O número era realmente " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }
        else{
            sco = 0;
            alert("Acabaram-se as chances... infelizmente você perdeu o jogo. Não fique triste, afinal, esse era o modo mais difícil! O número na verdade era " +n +". \n\nO jogo foi finalizado com " +sco +" pontos.");
        }

    }

}

else{
    alert("A dificuldade não existe ou foi escrita de forma errada! Tente novamente.");
}