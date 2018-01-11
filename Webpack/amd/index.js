require(['./liquidos'], function(liquidos){
	console.log(liquidos);
});

$("#content").html(liquidos.join(' | '));