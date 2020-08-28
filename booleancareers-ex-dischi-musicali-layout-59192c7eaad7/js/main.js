$(document).ready(function() {
	$.ajax(
		{
		  'url': 'https://flynn.boolean.careers/exercises/api/array/music',
		  'method': 'GET',
		  'success': function(risposta){
					/*console.log(risposta);*/
					var source = $('#entry-template').html();
				   	var template = Handlebars.compile(source);
					for (i = 0; i< risposta.response.length ; i ++) {
						var dischi = risposta.response[i];
						var html = template(dischi);
						$('.cds-container').append(html); 
					}
					
		  },
		  'error':function(){
			alert('errore!');
		  }
		}
	);
	$( "#genere" ).change(function() {
		var genere = ($('#genere').val());
		if (genere == "All") {
			$("#Rock").hide("slow");
		}
	});
});