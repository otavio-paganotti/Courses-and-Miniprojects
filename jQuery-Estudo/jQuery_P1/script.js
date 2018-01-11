
$(function(){

	//$('button').bind('click', function(){
	//	$('.div').load("teste.html");
	//});
	$.POST("teste.html", function(pagina){
			$('.div').html(pagina);
	});

});







//$.get("teste.html", function(pagina){
		//	$('.div').html(pagina);
		//});

		


































/* $(document).ready(function(){
	alert('Se fodeu');
});

//Também pode fazer deste jeito:

$(function(){
	alert('Se fodeu');
});

//Ou deste jeito:

function tudoPronto(){
	alert('Se fodeu');
}
$(document).ready(tudoPronto); */

// Transferir o jQuery para uma variável para não dar conflito com outras bibliotecas

//var $j = jQuery.noConflict();

/*

// Exemplos

$j(document).ready(tudoPronto);

// Outro exemplo de usar o jQuery para não dar conflito com outras bibliotecas

jQuery(document).ready(tudoPronto); */

// Adicionar classe em uma tag html

//$j('#teste').find('button').addClass('estilo');

//$j('#teste').find('input').attr('placeholder', 'Digite seu texto aqui');