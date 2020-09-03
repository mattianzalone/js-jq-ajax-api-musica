$(document).ready(function() {
	$.ajax(
		{
		  'url': 'https://flynn.boolean.careers/exercises/api/array/music',
		  'method': 'GET',
		  'success': function(risposta){
					console.log(risposta);
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
		});

		$('#scelta option').click(function(){
			var genere = $(this).html();
			console.log(genere);
			if(genere == 'All'){
				$('.cd').show();
			} else{
				$('.cd').hide();
				$('.cd.' + genere).show();
			}
		});

});