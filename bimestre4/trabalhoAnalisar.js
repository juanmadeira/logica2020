var v1=[], v2=[], resp=[];
var tamanho1=0, tamanho2 = 0;
var i=0, c, c2, temp;
tamanho1 = parseInt(prompt("Digite quantos elementos tem o primeiro conjunto de números:"));
for (c = 0; c < tamanho1; c++) {
	v1[c] = parseFloat(prompt("Digite o elemento: " +(c+1)));
}
tamanho2 = parseInt(prompt("Digite quantos elementos tem o segundo conjunto de números:"));
for (c = 0; c < tamanho2; c++) {
	v2[c] = parseFloat(prompt("Digite o elemento: "+(c+1)));
}
for (c = 0; c < v1.length; c++) {
	if (v2.indexOf(v1[c]) == -1) {
		resp[i] = v1[c];
		i++;
	}
}
for (c = 0; c < resp.length; c++) {
	for (c2=c+1; c2< resp.length; c2++) {
		if(resp[c]>resp[c2]){
			temp=resp[c];
			resp[c]=resp[c2];
			resp[c2]=temp;
		}
	}
}
alert("R=[" + resp + "] .") ;