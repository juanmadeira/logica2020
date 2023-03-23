// ———————————————————— Declaração de Variáveis ————————————————————

/* Legenda das variáveis:
p1 = primeiro jogador (player 1)
    nome1 = nome do primeiro jogador
p2 = segundo jogador (player 2)
    nome2 = nome do segundo jogador
win = variável para colocar o jogador vencedor
dnv = variável para recomeçar o jogo
a1 = coluna A, fileira 1
*/

var c1 = "⚪", c2 = "⚪", c3 = "⚪", c4 = "⚪", b1 = "⚪", b2 = "⚪", b3 = "⚪", b4 = "⚪", a1 = "⚪", a2 = "⚪", a3 = "⚪", a4 = "⚪";
var p1, p2, nome1, nome2, win, dnv;

// ———————————————————— Regras ————————————————————

alert("   ———> Connect 3\n\nO jogo se trata de uma grade 3x4 no qual o objetivo é que um dos jogadores consiga alinhar 3 peças (círculos) da mesma cor. É possível alinhá-las tanto verticalmente, horizontalmente ou até mesmo diagonalmente.");
nome1 = prompt("Ok, então vamos os nomes dos jogadores.\n\nComo se chama o primeiro jogador?");
nome2 = prompt("Certo. E qual seria o nome do segundo jogador?");

do{

p1 = 0;
p2 = 0;
win = 0;
dnv = 0;

// ———————————————————— O Jogo ————————————————————

p1 = prompt(nome1 +", sua vez! Insira em qual número (coluna) você deseja jogar.\n\n     1   2   3   4\nA " +a1+a2+a3+a4 +"\nB " +b1+b2+b3+b4 +"\nC " +c1+c2+c3+c4);
switch(p1){
    case "1":
        if(c1 !== "⚪"){
            if(b1 !== "⚪"){
                if(a1 !== "⚪"){
                    alert("Opa, você não pode ultrassar a primeira linha!");
                    break;
                }
                else{
                    a1 = "🔵";
                }
            }
            else{
                b1 = "🔵";
            }
        }
        else{
            c1 = "🔵";
        }
        break;
    case "2":
        if(c2 !== "⚪"){
            if(b2 !== "⚪"){
                if(a2 !== "⚪"){
                    alert("Opa, você não pode ultrassar a primeira linha!");
                    break;
                }
                else{
                    a2 = "🔵";
                }
            }
            else{
                b2 = "🔵";
            }
        }
        else{
            c2 = "🔵";
        }
        break;
    case "3":
        if(c3 !== "⚪"){
            if(b3 !== "⚪"){
                if(a3 !== "⚪"){
                    alert("Opa, você não pode ultrassar a primeira linha!");
                    break;
                }
                else{
                    a3 = "🔵";
                }
            }
            else{
                b3 = "🔵";
            }
        }
        else{
            c3 = "🔵";
        }
        break;
    case "4":
        if(c4 !== "⚪"){
            if(b4 !== "⚪"){
                if(a4 !== "⚪"){
                    alert("Opa, você não pode ultrassar a primeira linha!");
                    break;
                }
                else{
                    a4 = "🔵";
                }
            }
            else{
                b4 = "🔵";
            }
        }
        else{
            c4 = "🔵";
        }
        break;
}

//Verificador de Vitória - Jogador 1
    //Verticais
if(c1 == "🔵" && b1 == "🔵" && a1 == "🔵"){
    c1 = "🟡", b1 = "🟡", a1 = "🟡";
    win = "p1"
}
else if(c2 == "🔵" && b2 == "🔵" && a2 == "🔵"){
    c2 = "🟡", b2 = "🟡", a2 = "🟡";
    win = "p1"
}
else if(c3 == "🔵" && b3 == "🔵" && a3 == "🔵"){
    c3 = "🟡", b3 = "🟡", a3 = "🟡";
    win = "p1"
}
else if(c4 == "🔵" && b4 == "🔵" && a4 == "🔵"){
    c4 = "🟡", b4 = "🟡", a4 = "🟡";
    win = "p1"
}
    //Horizontais
else if(c1 == "🔵" && c2 == "🔵" && c3 == "🔵"){
    c1 = "🟡", c2 = "🟡", c3 = "🟡";
    win = "p1"
}
else if(c2 == "🔵" && c3 == "🔵" && c4 == "🔵"){
    c2 = "🟡", c3 = "🟡", c4 = "🟡";
    win = "p1"
}
else if(b1 == "🔵" && b2 == "🔵" && b3 == "🔵"){
    b1 = "🟡", b2 = "🟡", b3 = "🟡";
    win = "p1"
}
else if(b2 == "🔵" && b3 == "🔵" && b4 == "🔵"){
    b2 = "🟡", b3 = "🟡", b4 = "🟡";
    win = "p1"
}
else if(a1 == "🔵" && a2 == "🔵" && a3 == "🔵"){
    a1 = "🟡", a2 = "🟡", a3 = "🟡";
    win = "p1"
}
else if(a2 == "🔵" && a3 == "🔵" && a4 == "🔵"){
    a2 = "🟡", a3 = "🟡", a4 = "🟡";
    win = "p1"
}
    //Diagonais
else if(c1 == "🔵" && b2 == "🔵" && a3 == "🔵"){
    c1 = "🟡", b2 = "🟡", a3 = "🟡";
    win = "p1"
}
else if(c2 == "🔵" && b3 == "🔵" && a4 == "🔵"){
    c2 = "🟡", b3 = "🟡", a4 = "🟡";
    win = "p1"
}
else if(c4 == "🔵" && b3 == "🔵" && a2 == "🔵"){
    c4 = "🟡", b3 = "🟡", a2 = "🟡";
    win = "p1"
}
else if(c3 == "🔵" && b2 == "🔵" && a1 == "🔵"){
    c3 = "🟡", b2 = "🟡", a1 = "🟡";
    win = "p1"
}

//Fim - se o jogador 1 ganhar
if(win == "p1"){
    alert(+nome1 +" foi o vencedor da partida. Parabéns!\n\n     1   2   3   4\nA " +a1+a2+a3+a4 +"\nB " +b1+b2+b3+b4 +"\nC " +c1+c2+c3+c4);

    //Jogar novamente
    dnv = prompt("Deseja jogar novamente? (S/N)");
    if(dnv == "S" || dnv == "s" || dnv == "Sim" || dnv == "sim"){
        var c1 = "⚪", c2 = "⚪", c3 = "⚪", c4 = "⚪", b1 = "⚪", b2 = "⚪", b3 = "⚪", b4 = "⚪", a1 = "⚪", a2 = "⚪", a3 = "⚪", a4 = "⚪";
        dnv = 0;
    }
    else{
        break;
    }

}

p2 = prompt("Vamos lá, " +nome2 +", agora é você! Insira em qual número (coluna) você deseja jogar.\n\n     1   2   3   4\nA " +a1+a2+a3+a4 +"\nB " +b1+b2+b3+b4 +"\nC " +c1+c2+c3+c4);
switch(p2){
    case "1":
        if(c1 !== "⚪"){
            if(b1 !== "⚪"){
                if(a1 !== "⚪"){
                    alert("Opa, você não pode ultrassar a primeira linha!");
                    break;
                }
                else{
                    a1 = "🔴";
                }
            }
            else{
                b1 = "🔴";
            }
        }
        else{
            c1 = "🔴";
        }
        break;
    case "2":
        if(c2 !== "⚪"){
            if(b2 !== "⚪"){
                if(a2 !== "⚪"){
                    alert("Opa, você não pode ultrassar a primeira linha!");
                    break;
                }
                else{
                    a2 = "🔴";
                }
            }
            else{
                b2 = "🔴";
            }
        }
        else{
            c2 = "🔴";
        }
        break;
    case "3":
        if(c3 !== "⚪"){
            if(b3 !== "⚪"){
                if(a3 !== "⚪"){
                    alert("Opa, você não pode ultrassar a primeira linha!");
                    break;
                }
                else{
                    a3 = "🔴";
                }
            }
            else{
                b3 = "🔴";
            }
        }
        else{
            c3 = "🔴";
        }
        break;
    case "4":
        if(c4 !== "⚪"){
            if(b4 !== "⚪"){
                if(a4 !== "⚪"){
                    alert("Opa, você não pode ultrassar a primeira linha!");
                    break;
                }
                else{
                    a4 = "🔴";
                }
            }
            else{
                b4 = "🔴";
            }
        }
        else{
            c4 = "🔴";
        }
        break;
}

//Verificador de Vitória - Jogador 2
    //Verticais
if(c1 == "🔴" && b1 == "🔴" && a1 == "🔴"){
    c1 = "🟡", b1 = "🟡", a1 = "🟡";
    win = "p2"
}
else if(c2 == "🔴" && b2 == "🔴" && a2 == "🔴"){
    c2 = "🟡", b2 = "🟡", a2 = "🟡";
    win = "p2"
}
else if(c3 == "🔴" && b3 == "🔴" && a3 == "🔴"){
    c3 = "🟡", b3 = "🟡", a3 = "🟡";
    win = "p2"
}
else if(c4 == "🔴" && b4 == "🔴" && a4 == "🔴"){
    c4 = "🟡", b4 = "🟡", a4 = "🟡";
    win = "p2"
}
    //Horizontais
else if(c1 == "🔴" && c2 == "🔴" && c3 == "🔴"){
    c1 = "🟡", c2 = "🟡", c3 = "🟡";
    win = "p2"
}
else if(c2 == "🔴" && c3 == "🔴" && c4 == "🔴"){
    c2 = "🟡", c3 = "🟡", c4 = "🟡";
    win = "p2"
}
else if(b1 == "🔴" && b2 == "🔴" && b3 == "🔴"){
    b1 = "🟡", b2 = "🟡", b3 = "🟡";
    win = "p2"
}
else if(b2 == "🔴" && b3 == "🔴" && b4 == "🔴"){
    b2 = "🟡", b3 = "🟡", b4 = "🟡";
    win = "p2"
}
else if(a1 == "🔴" && a2 == "🔴" && a3 == "🔴"){
    a1 = "🟡", a2 = "🟡", a3 = "🟡";
    win = "p2"
}
else if(a2 == "🔴" && a3 == "🔴" && a4 == "🔴"){
    a2 = "🟡", a3 = "🟡", a4 = "🟡";
    win = "p2"
}
    //Diagonais
else if(c1 == "🔴" && b2 == "🔴" && a3 == "🔴"){
    c1 = "🟡", b2 = "🟡", a3 = "🟡";
    win = "p2"
}
else if(c2 == "🔴" && b3 == "🔴" && a4 == "🔴"){
    c2 = "🟡", b3 = "🟡", a4 = "🟡";
    win = "p2"
}
else if(c4 == "🔴" && b3 == "🔴" && a2 == "🔴"){
    c4 = "🟡",  b3 = "🟡", a2 = "🟡";
    win = "p2"
}
else if(c3 == "🔴" && b2 == "🔴" && a1 == "🔴"){
    c3 = "🟡", b2 = "🟡", a1 = "🟡";
    win = "p2"
}

//Fim - se o jogador 2 ganhar
if(win == "p2"){
    alert(+nome2 +" foi o vencedor da partida. Parabéns!\n\n     1   2   3   4\nA " +a1+a2+a3+a4 +"\nB " +b1+b2+b3+b4 +"\nC " +c1+c2+c3+c4);

    //Jogar novamente
    dnv = prompt("Deseja jogar novamente? (S/N)");
    if(dnv == "S" || dnv == "s" || dnv == "Sim" || dnv == "sim"){
        var c1 = "⚪", c2 = "⚪", c3 = "⚪", c4 = "⚪", b1 = "⚪", b2 = "⚪", b3 = "⚪", b4 = "⚪", a1 = "⚪", a2 = "⚪", a3 = "⚪", a4 = "⚪";
        dnv = 0;
    }
    else{
        break;
    }

}

//Empate
if(a1 !== "⚪" && a2 !== "⚪" && a3 !== "⚪" && a4 !== "⚪" && b1 !== "⚪" && b2 !== "⚪" && b3 !== "⚪" && b4 !== "⚪" && c1 !== "⚪" && c2 !== "⚪" && c3 !== "⚪" && c4 !== "⚪"){
    alert("Parece que todas as peças do tabuleiro foram preenchidas! O jogo empatou.\n\n     1   2   3   4\nA " +a1+a2+a3+a4 +"\nB " +b1+b2+b3+b4 +"\nC " +c1+c2+c3+c4);
    
    //Jogar novamente
    dnv = prompt("Deseja jogar novamente? (S/N)");
    if(dnv == "S" || dnv == "s" || dnv == "Sim" || dnv == "sim"){
        var c1 = "⚪", c2 = "⚪", c3 = "⚪", c4 = "⚪", b1 = "⚪", b2 = "⚪", b3 = "⚪", b4 = "⚪", a1 = "⚪", a2 = "⚪", a3 = "⚪", a4 = "⚪";
        dnv = 0;
    }
    else{
        break;
    }

}

} while (dnv == 0);