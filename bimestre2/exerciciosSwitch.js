//1 (Calculadora)
var val1, operacao, val2, resultAdic, resultSub, resultMulti, resultDivi;
val1 = Number(prompt("Insira o primeiro valor:"));
operacao = prompt("Insira a operação matemática:");
val2 = Number(prompt("Insira o segundo valor:"));
resultAdic = val1 + val2;
resultSub = val1 - val2;
resultMulti = val1 * val2;
resultDivi = val1 / val2;

switch (operacao){
    case "adição" || "+": 
        alert("O resultado é: " +resultAdic +".");
        break;
    case "subtração":
        alert("O resultado é: " +resultSub +".");
        break;
    case "multiplicação":
        alert("O resultado é: " +resultMulti +".");
        break;
    case "divisão":
        alert("O resultado é: " +resultDivi +".");
        break;
}

//2 (Meses)
var mes, bissexto;
mes = String(prompt("Insira o nome do mês:"));
bissexto = String(prompt("O ano é bissexto?"));

if (bissexto == "Sim" || bissexto == "sim"){
    switch (mes){
        case "Fevereiro":
        case "fevereiro":
            alert("O mês tem 29 dias.");
            break;
        case "Abril":
        case "abril":
        case "Junho":
        case "junho":
        case "Setembro":
        case "setembro":
        case "Novembro":
        case "novembro":
            alert("O mês tem 30 dias.");
            break;
        case "Janeiro":
        case "janeiro":
        case "Março":
        case "março":
        case "Maio":
        case "maio":
        case "Julho":
        case "julho":
        case "Agosto":
        case "agosto":
        case "Outubro":
        case "outubro":
        case "Dezembro":
        case "dezembro":
            alert("O mês tem 31 dias.");
            break;
        default:
            alert("Mês inexistente.");
    }
}
else{
switch (mes){
    case "Fevereiro":
    case "fevereiro":
        alert("O mês tem 28 dias.");
        break;
    case "Abril":
    case "abril":
    case "Junho":
    case "junho":
    case "Setembro":
    case "setembro":
    case "Novembro":
    case "novembro":
        alert("O mês tem 30 dias.");
        break;
    case "Janeiro":
    case "janeiro":
    case "Março":
    case "março":
    case "Maio":
    case "maio":
    case "Julho":
    case "julho":
    case "Agosto":
    case "agosto":
    case "Outubro":
    case "outubro":
    case "Dezembro":
    case "dezembro":
        alert("O mês tem 31 dias.");
        break;
    default:
            alert("Mês inexistente.");
}}