var main = function() {
	"use strict";

	var getTag = function() {
		var url = "";
		if ($(".tag-input input").val() !== ""){
			url = "http://api.flickr.com/services/feeds" +
			"/photos_public.gne?tags=" + 
			$(".tag-input input").val() +
			"&format=json&jsoncallback=?";
		}
		return url;
	}

	var playSlideShow = function() {
		var url = getTag();
		$.getJSON(url, function (flickrResponse) {
		var displayImage = function(imageIndex) {
			var $img = $("<img>").hide();
			$img.attr("src", flickrResponse.items[imageIndex].media.m);
			console.log(flickrResponse.items[imageIndex].media.m);
			$(".image").empty();
			$(".image").append($img);
			$img.fadeIn();

			setTimeout ( function () {
				imageIndex++;
				if (imageIndex > flickrResponse.items.length-1){
					imageIndex = 0;
				}
				displayImage(imageIndex);
			}, 3000);
		};
		displayImage(0);
		});
	}

	$(".tag-input button").on("click", function (event) {
		playSlideShow();
	});

	$(".tag-input input").on("keypress", function (event) {
		if (event.keyCode === 13) {
			playSlideShow();
		}
	});

};

$(document).ready(main);

