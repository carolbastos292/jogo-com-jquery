var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	$("#botao-reiniciar").click(reiniciaJogo); 
});

function atualizaTamanhoFrase(){
	var frase = $(".frase").text(); //A função .text() do jQuery serve para modificar o conteúdo de texto das tags
	var numPalavras = frase.split(" ").length;
	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);

}

//funcao para contar caracteres e palavras
function inicializaContadores(){
	campo.on("input", function(){ //A função .val() é para alterar os valores dos campos de input
		var conteudo = campo.val();
		var qtdPalavras = conteudo.split(/\S+/).length - 1; //A expressão regular será responsável por buscar qualquer caractere, exceto espaço vazio: /\S+/
		$("#contador-palavras").text(qtdPalavras);

		var qtdCaracteres = conteudo.length;
		$("#contador-caracteres").text(qtdCaracteres);
	});
}

function inicializaCronometro(){
	var tempoRestante = $("#tempo-digitacao").text();
	campo.one("focus", function(){ //evento focus detecta se o marcador de texto ta dentro do input / funcao one só funciona a funcao como uma unica vez	
		$("#botao-reiniciar").attr("disabled", true);
		var cronometroID = setInterval(function(){ //que faz com que uma determinada ação seja executada em um intervalo de tempo
			tempoRestante--;
			$("#tempo-digitacao").text(tempoRestante);
				if(tempoRestante < 1){
					campo.attr("disabled",true);// funcao attr altera os atributos de elemento
					clearInterval(cronometroID); //limpa o cronometro
					$("#botao-reiniciar").attr("disabled", false);
				}
		},1000);
	});	
}


function reiniciaJogo(){
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
};

