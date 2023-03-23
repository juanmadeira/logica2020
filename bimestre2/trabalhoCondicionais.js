//Questão 1.
var inicio, fim, n;

inicio = Number(prompt("Insira o início do intervalo:"));
fim = Number(prompt("Insira o fim do intervalo:"));
n = Number(prompt("Insira o número:"));

if (n >= inicio && n <= fim){
    alert("O número " +n +" está dentro do intervalo.");
}
else{
    alert("O número " +n +" está fora do intervalo.");
}

//Questão 2.
var x, y, z;

x = Number(prompt("Insira o valor X:"));
y = Number(prompt("Insira o valor Y:"));
z = Number(prompt("Insira o valor Z:"));

if (x > y + z || y > x + z || z > x + y){
    alert("Os valores não podem ser os comprimentos dos lados de um triângulo.");
}

else{

    if (x == y && x == z){
        alert("O triângulo é equilátero.");
    }

    if (x == y && x !== z && y !== z){
        alert("O triângulo é isósceles.");
    }
        if (x == z && x !== y && y !== z){
            alert("O triângulo é isósceles.");
        }
            if (y == z && x !== y && x !== z){
                alert("O triângulo é isósceles.");
            }

    if (x !== y && x !== z && y !== z){
        alert("O triângulo é escaleno.");
    }

}

//Questão 3.
var matricula, aa, ano, semestre;

matricula = parseInt(prompt("Insira o número de matrícula:"));

if(matricula > 9999999){
    alert("O número de matrícula ultrapassou 7 dígitos.")
}
else{

    aa = matricula / 100000;

    if(aa > 21){
        ano = 1900 + aa
    }

    if(aa <= 21 || aa >= 0 && aa <= 10){
        ano = 2000 + aa
    }

    semestre = matricula / 10000 % 10
   
    alert("O aluno se matrículou no ano de " +ano.toFixed(0) +", e no " +semestre.toFixed(0) +"° semestre.");

}

//Questão 4. (2. Plantação de Morangos)
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