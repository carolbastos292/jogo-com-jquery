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
campo.on("focus", function(){
	console.log("Estou digitando")
});