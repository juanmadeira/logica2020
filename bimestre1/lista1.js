// 1 
var area=Number(), raio=Number(prompt("Insira o valor do raio "));

    area = 3.14159*(raio**2);

    alert("A área da circunferência é "+area);



// 2
var valorhoraaula=Number(prompt("Insira o valor da hora-aula")), horasmes=Number(prompt("Insira o valor de horas trabalhadas por mês")), percentualINSS=Number(prompt("Insira o percentual de desconto do INSS"));
var salario_liq=Number(), salario_brut=Number(), descontoINSS=Number();

    salario_brut = valorhoraaula*horasmes;
    descontoINSS = percentualINSS/100*salario_brut;
    salario_liq = salario_brut-descontoINSS;

    alert("Este é o salário líquido: R$ " + salario_liq);



// 3
var celsius=Number(prompt("Insira a temperatura em ºC")), fahrenheit=Number();

	fahrenheit = (9*celsius+160)/5;
    
    alert("Esta é a temperatura em ºF: "+fahrenheit);



// 4
var fahrenheit=Number(prompt("Insira a temperatura em ºF")), celsius=Number();

    celsius = 5*(fahrenheit-32)/9;
    
    alert("Esta é a temperatura em ºC: "+celsius);



// 5
var volume=Number(), raio=Number(prompt("Insira o valor do raio da lata")), altura=Number(prompt("Insira a altura da lata"));

	volume = 3.14159*(raio**2)*altura;
    
    alert("O volume da lata é: "+volume);



// 6
var litros_usados=Number(), distancia=Number(), tempo=Number(prompt("Insira o tempo gasto durante a viagem")), velo=Number(prompt("Insira a velocidade média durante a viagem"));

    distancia = tempo*velo;
    litros_usados = distancia/12;

    alert("Com uma velocidade média de "+velo +" ,em um tempo de " +tempo + "A distância percorrida foi " +distancia +"E foram utilizados " +litros_usados +"L");



// 7
var val_prest_atraso=Number(), val=Number(prompt("Insira o valor da prestação")), taxa_juros=Number(prompt("Insira a taxa de juros")), tempo_meses=Number(prompt("Insira o tempo em meses"));

	val_prest_atraso = val+(val*taxa_juros/100)*tempo_meses;
    alert("O valor da prestação em atraso é de: R$ " +val_prest_atraso);
    


// 8
var volume=Number(), comp=Number(prompt("Insira o comprimento da caixa")), larg=Number(prompt("Insira a largura da caixa")), alt=Number(prompt("Insira a altura da caixa"));

    volume = comp*larg*alt;
    
    alert("O volume da caixa é " +volume);
    


// 9
var valor_dolar=Number(prompt("Insira aqui a quantia em dólares para ser convertida")), valor_real=Number(), cotacao_dolar=Number(prompt("Insira aqui a cotação do dólar atualmente"));

    valor_real = valor_dolar*cotacao_dolar;

    alert("A quantia em dólares convertida para reais é: R$ " +valor_real);



// 10
var valor_dolar=Number(), valor_real=Number(prompt("Insira aqui a quantia em reais para ser convertida")), cotacao_dolar=Number(prompt("Insira aqui a cotação do dólar atualmente"));

    valor_dolar = valor_real/cotacao_dolar;

    alert("A quantia em reais convertida para dólares é: $ " +valor_dolar);



// 11
var a=Number(prompt("Insira o valor da variável A")), b=Number(prompt("Insira o valor da variável B")), sem_valor;

	sem_valor = a;  
	a = b;
    b = sem_valor;
    
    alert("Após a troca de valores, A possui o valor de "+a +", enquanto B possui o valor de "+b);
    


// 12
var a=parseInt(prompt("Insira o primeiro valor")), b=parseInt(prompt("Insira o segundo valor")), resultado=parseInt();

    resultado = (a-b)**2;
    
    alert("O resultado do quadrado da diferença entre o primeiro valor pelo segundo é: "+resultado);
    


// 13
var a=parseInt(prompt("Insira o primeiro valor")), b=parseInt(prompt("Insira o segundo valor")), c=parseInt(prompt("Insira o terceiro valor")), resultado=parseInt();

    resultado = (a*a)+(b*b)+(c*c);

    alert("O resultado da soma dos quadrados dos três valores é: "+resultado);



// 14
var a=parseInt(prompt("Insira o primeiro valor")), b=parseInt(prompt("Insira o segundo valor")), c=parseInt(prompt("Insira o terceiro valor")), resultado=parseInt();

	resultado = (a+b+c)**2;
    
    alert("O resultado do quadrado da soma dos três valores é: "+resultado);



// 15
var a=parseInt(prompt("Insira aqui o primeiro valor")), b=parseInt(prompt("Insira aqui o segundo valor")), c=parseInt(prompt("Insira aqui o terceiro valor")), d=parseInt(prompt("Insira aqui o quarto valor")), resultado=parseInt(), resultado2=parseInt();

	resultado = a*c;
	resultado2 = b+d;
    alert("O resultado do produto do primeiro com o terceiro valor é: "+resultado +", enquanto o resultado da soma do segundo com o quarto valor é: " +resultado2);
    


// 16
var salario_antigo=Number(prompt("Insira aqui o salário antes do reajuste")), salario_novo=Number(), percentual_reajuste=Number(prompt("Insira aqui o percentual do reajuste do salário")), reajuste=Number();

    reajuste = salario_antigo*(percentual_reajuste/100);
    salario_novo = salario_antigo+reajuste;
    
    alert("Este é o salário após o reajuste: "+salario_novo);



// 17
var eleitores=Number(), a=Number(prompt("Número de pessoas que votaram no candidato A")), b=Number(prompt("Número de pessoas que votaram no candidato B")), c=Number(prompt("Número de pessoas que votaram no candidato C")), nulo=Number(prompt("Número de pessoas que votaram nulo")), branco=Number(prompt("Número de pessoas que votaram em branco")), a_emrelacao_eleitores=Number(), b_emrelacao_eleitores=Number(), c_emrelacao_eleitores=Number(), nulo_emrelacao_eleitores=Number(), branco_emrelacao_eleitores=Number();

    eleitores = a+b+c+nulo+branco;
    a_emrelacao_eleitores = 100/(eleitores/a);
    b_emrelacao_eleitores = 100/(eleitores/b);
    c_emrelacao_eleitores = 100/(eleitores/c);
    nulo_emrelacao_eleitores = 100/(eleitores/nulo);
    branco_emrelacao_eleitores = 100/(eleitores/branco);

    alert("Tendo o número de eleitores como "+eleitores+"..." + "\nO percentual de votos válidos para o candidato A em relação ao número de eleitores é: " +a_emrelacao_eleitores.toFixed(2)+"%" +"\nO percentual de votos válidos para o candidato B em relação ao número de eleitores é: " +b_emrelacao_eleitores.toFixed(2)+"%" +"\nO percentual de votos válidos para o candidato C em relação ao número de eleitores é: " +c_emrelacao_eleitores.toFixed(2)+"%" +"\nO percentual de votos nulos em relação ao número de eleitores é: " +nulo_emrelacao_eleitores.toFixed(2)+"%" +"\nO percentual de votos em branco em relação ao número de eleitores é: " +branco_emrelacao_eleitores.toFixed(2)+"%");



// 18
var latas_tinta=Number(), custo_total=Number(), area=Number(), altura=Number(prompt("Insira aqui a altura do cilindro")), raio=Number(prompt("Insira aqui o raio do cilindro"));

	area = 2*3.14159*raio*(altura+raio);
	latas_tinta = area/15;
    custo_total = latas_tinta*50;
    
	alert("Serão necessárias "+latas_tinta.toFixed(2)+" latas de tinta, que irão ter um custo de R$ "+custo_total.toFixed(2));