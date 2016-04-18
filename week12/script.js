var adoption =
document.querySelector ('.jsa a');

var adoptionb =
document.querySelector ('.js-adoption-content');

adoption.addEventListener ('click', function() {
		document.querySelector('js-adoption')
		.classList
		.toggle('js-adoption')
		.toggle('js-adoption-content');
});

var close =
document.querySelector ('.fa-times');

close.addEventListener ('click', function() {
		document.querySelector('js-adoption')
		.classList
		.toggle('js-adoption')
		.toggle('js-adoption-content');
});