//1. Bondinho
var alunos, monitores;

alunos = parseInt(prompt("Insira o número de alunos que irão entrar na cabine:"));
monitores = parseInt(prompt("Insira o número de monitores que irão entrar na cabine:"));

if (alunos + monitores <= 0){
    alert("Informe um número maior do que zero.");
}
else{
    if (alunos + monitores <= 50 && alunos + monitores > 0){
        alert("É possível fazer a viagem com esse número de pessoas.");
    }
    else{
        alert("Não é possível fazer a viagem com esse número de pessoas.");
    }
}

//2. Plantação de Morangos
var comp1, larg1, comp2, larg2, area1, area2;

comp1 = Number(prompt("Insira o comprimento (em metros) do primeiro local:"));
larg1 = Number(prompt("Insira a largura (em metros) do primeiro local:"));
    area1 = comp1 * larg1;
comp2 = Number(prompt("Insira o comprimento (em metros) do segundo local:"));
larg2 = Number(prompt("Insira a largura (em metros) do segundo local:"));
    area2 = comp2 * larg2;

if(area1 == 0 && area2 == 0){
    alert("Informe valores maiores que zero para as dimensões das áreas.");
}
else{
    if(Math.max(area1, area2) == area1){
        alert("A maior área é a primeira, contendo " +area1 +" metros.");
    }
    else{
        alert("A maior área é a segunda, contendo " +area2 +" metros.");
    }
}

//3. Jogo de par ou ímpar
var p, d1, d2, soma;

p = String(prompt("Insira quem gritou 'par':"));
d1 = parseInt(prompt("Insira quantos dedos Alice estendeu:"));
d2 = parseInt(prompt("Insira quantos dedos Bob estendeu:"));
soma = d1 + d2

if(p == "Alice" || p == "alice" || p == "Alice." || p == "alice."){
    if(soma%2 == 0){
        alert("A soma dos números dos dedos deu par, logo, Alice venceu e Bob perdeu.");
    }
    else{
        alert("A soma dos números dos dedos deu ímpar, logo, Alice perdeu e Bob venceu.");
    }
}

else if(p == "Bob" || p == "bob" || p == "Bob." || p == "bob."){
    if(soma%2 == 0){
        alert("A soma dos números dos dedos deu par, logo, Bob venceu e Alice perdeu.");
    }
    else{
        alert("A soma dos números dos dedos deu ímpar, logo, Bob perdeu e Alice venceu.");
    }
}
else{
    alert("Não foi possível reconhecer quem gritou 'par'.");
}

//4. Drone de Entrega
var x, y, alt, larg, prof;

x = Number(prompt("Insira a dimensão X da janela:"));
y = Number(prompt("Insira a dimensão Y da janela:"));
alt = Number(prompt("Insira a altura da caixa:"));
larg = Number(prompt("Insira a largura da caixa:"));
prof = Number(prompt("Insira a profundidade da caixa"));

if(x * y > alt * larg){
    alert("É possível fazer a entrega por meio do drone.");
}
else{
    alert("A entrega terá de ser feita por meios normais.");
}