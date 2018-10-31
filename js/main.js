var frase = $(".frase").text(); //seleciona o elemento que tem a classe frase e exibe o que ta la dentro
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
//funcao para contar caracteres e palavras
campo.on("input", function(){ //input serve pra quando tiver digitando dados no campo ele executa a funcao
	var conteudo = campo.val();
	var qtdPalavras = conteudo.split(/\S+/).length - 1; //A expressão regular será responsável por buscar qualquer caractere, exceto espaço vazio: /\S+/
	$("#contador-palavras").text(qtdPalavras);

	var qtdCaracteres = conteudo.length;
	$("#contador-caracteres").text(qtdCaracteres);
});
var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function(){ //evento focus detecta se o marcador de texto ta dentro do input / funcao one só funciona a funcao como uma unica vez	
var cronometroID = setInterval(function(){ //que faz com que uma determinada ação seja executada em um intervalo de tempo
		tempoRestante--;
		$("#tempo-digitacao").text(tempoRestante);
		if(tempoRestante < 1){
			campo.attr("disabled",true);// funcao attr pega o valor de um atributo ou modifica ele, semelhante a text
			clearInterval(cronometroID); //limpa o cronometro
		}
	},1000);
});