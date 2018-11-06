$(function(){

	//Afficher 12 cards

	let cardMovies = $('.card-f-movie');
	
	if(cardMovies.length > 12){
		for(let i=12; i<cardMovies.length; i++){
			cardMovies.eq(i).hide();
		}
	}


	//Cacher et montrer les cards
	let count = 0;
	$('.plus').click(function(){
		for(let i=12; i<cardMovies.length; i++){
			cardMovies.eq(i).toggle();
		}
		count += 1;
		if(count % 2 == 0){
			$('.plus').text('plus de films');
		}else{
			$('.plus').text('moins de films');
		}
	});

	//tri des cards
	$('.all').click(function(){
		
	});
});