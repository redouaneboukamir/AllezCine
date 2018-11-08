$(function(){

	//Afficher 12 cards
	let afficher12 = () => {
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
	}

	afficher12();

	//function tri
	let tri = (button, data) => {
		$('.tri').removeClass('active');
		$(button).addClass('active');
		$('.card-f-movie').hide();
		$('.card-f-movie').filter(`[data-type=${data}]`).show();
	}

	//tri des cards
	$('#all').click(function(){
		tri('#all');
		$('.card-f-movie').show();
		afficher12();
	});
	$('#comedie').click(function(){
		tri('#comedie', 'comedie');
	});
	$('#thriller').click(function(){
		tri('#thriller','thriller');
	});
	$('#drame').click(function(){
		tri('#drame', 'drame');
	});
	$('#scifi').click(function(){
		tri('#scifi','scifi');
	});
	$('#aventure').click(function(){
		tri('#aventure', 'aventure');
	});

});