$(document).ready(function(event){
	$('.timezone-block').click(function(event){
		$('.strelka').toggleClass('strelka-active');
		$('.timezone-block').toggleClass('timezone-block-active');
		$('.timezone-down').toggleClass('timezone-down-active');
	});
	$('.down-one').click(function(event){
		$('.timezone-block p').text('(UTC -13:00) Baker/Howland Island');
	});
	$('.down-two').click(function(event){
		$('.timezone-block p').text('(UTC -14:00) Baker/Howland Island');
	});
	$('.down-last').click(function(event){
		('.timezone-block p').text('(UTC -15:00) Baker/Howland Island');
	});
});