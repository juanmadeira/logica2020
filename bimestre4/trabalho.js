//1 Felipe ciclista
var h = [], diaaux = "", mais = 0, menos = 0, totalh, mediah;

for(var i  = 0; i < 7; i++){
    switch(i){
        case 0:
            diaaux = "no domingo:";
            break;
        case 1:
            diaaux = "na segunda-feira:";
            break;
        case 2:
            diaaux = "na terça-feira:";
            break;
        case 3:
            diaaux = "na quarta-feira:";
            break;
        case 4:
            diaaux = "na quinta-feira:";
            break;
        case 5:
            diaaux = "na sexta-feira:";
            break;
        case 6:
            diaaux = "no sábado:";
            break;
        
    }
    h[i] = Number(prompt("Insira quantas horas Felipe pedalou " +diaaux));
}

mais = h[0];
menos = h[0];

for(i = 0; i < h.length; i++){
    alert(h[i]);
    if(h[i] > mais){
        mais = i + 1;
    }
    if(h[i] < menos){
        menos = i + 1;
    }
    alert(mais +"\n\n" +menos);
}

switch(mais){
    case 0:
        mais = "domingo";
        break;
    case 1:
        mais = "segunda-feira";
        break;
    case 2:
        mais = "terça-feira";
        break;
    case 3:
        mais = "quarta-feira";
        break;
    case 4:
        mais = "quinta-feira";
        break;
    case 5:
        mais = "sexta-feira";
        break;
    case 6:
        mais = "sábado";
        break;
    
}

switch(menos){
    case 0:
        menos = "domingo";
        break;
    case 1:
        menos = "segunda-feira";
        break;
    case 2:
        menos = "terça-feira";
        break;
    case 3:
        menos = "quarta-feira";
        break;
    case 4:
        menos = "quinta-feira";
        break;
    case 5:
        menos = "sexta-feira";
        break;
    case 6:
        menos = "sábado";
        break;
    
}

alert(mais =" mais\n\n menos " +menos)

//2


//3 Analisar o código
/*
1. O programa lê dois conjuntos, permitindo que o usuário escolha quantos elementos há em cada conjunto. Em seguida, faz com que um for analise quais são os elementos exclusivos do primeiro conjunto. Após, organiza em ordem crescente e então exibe o resultado com o vetor "resp".
2. O for, que engloba as linhas de 18 a 26, faz com que os elementos do vetor "resp" sejam organizados em ordem crescente. Para isso, utiliza a variável "temp", como auxiliar na inversão de valores.
*/