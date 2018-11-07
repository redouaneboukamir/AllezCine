$(function(){

	//Afficher 12 cards
	let afficher12s = () => {
		let cardSeries = $('.card-f-serie');
	
		if(cardSeries.length > 12){
			for(let i=12; i<cardSeries.length; i++){
				cardSeries.eq(i).hide();
			}
		}
		//Cacher et montrer les cards
		let count = 0;
		$('.plus-s').click(function(){
			for(let i=12; i<cardSeries.length; i++){
				cardSeries.eq(i).toggle();
			}
			count += 1;
			if(count % 2 == 0){
				$('.plus-s').text('plus de séries');
			}else{
				$('.plus-s').text('moins de séries');
			}
		});
	}

	afficher12s();

	//function tri
	let tri = (button, data) => {
		$('.tri').removeClass('active');
		$(button).addClass('active');
		$('.card-f-serie').hide();
		$('.card-f-serie').filter(`[data-type=${data}]`).show();
	}

	//tri des cards
	$('#all-s').click(function(){
		tri('#all-s');
		$('.card-f-serie').show();
		afficher12s();
	});
	$('#comedie-s').click(function(){
		tri('#comedie-s', 'comedie');
	});
	$('#thriller-s').click(function(){
		tri('#thriller-s','thriller');
	});
	$('#drame-s').click(function(){
		tri('#drame-s', 'drame');
	});
	$('#scifi-s').click(function(){
		tri('#scifi-s','scifi');
	});
	$('#aventure-s').click(function(){
		tri('#aventure-s', 'aventure');
	});

});