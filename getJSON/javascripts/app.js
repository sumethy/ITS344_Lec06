var main = function (){
	"use strict";
	$.getJSON("aceOfSpades.json", function (cards){
		console.log(cards);
	});
}
$(document).ready(main);