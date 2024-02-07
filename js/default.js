var bannerImages = [
//{"url":"images/stock/sid2.jpg", "position":"left bottom"},
{"url":"images/stock/sinead17.jpg", "position":"center", "theme":"dark"},
{"url":"images/stock/sinead4.jpg", "position":"center"},
{"url":"images/stock/sinead10.jpg", "position":"center"},
{"url":"images/stock/sinead12.jpg", "position":"center"},
{"url":"images/stock/sinead3.jpg", "position":"center"},
{"url":"images/stock/sinead7.jpg", "position":"center"}
		]

var bannerImageIndex = 0;
var theme = 'light'


$(document).ready(function () {
	
	setBannerImage();
	setEventHandlers();

});


function setEventHandlers() {

	$(document).on("click", ".header-banner.random-banner", function(e) {headerBannerClick(e, this)});
	$(document).on("click", ".footer-sid img", function() {sidTheDogImageClick(this)});
	$(document).on("click", ".burger-icon-inner", function() {burgerIconClick(this)});
	$(document).on("click", ".email-subscription-buttons input[type='button']", function() {emailSubscribeClick(this)});
		 
}


function setBannerImage() {
		 
	var bannerImage = bannerImages[Math.floor(Math.random()*bannerImages.length)];
	//var bannerImage = bannerImages[bannerImageIndex % bannerImages.length];
	//bannerImageIndex++;
	
	if(!$('.header-banner').hasClass('random-banner')) { return };
	
	$('.header-banner.random-banner').css('background-image', 'url(' + bannerImage.url + ')');
	$('.header-banner.random-banner').css('background-position', bannerImage.position);
	
	if (bannerImage.theme == 'dark') {
			$('.header-banner.random-banner').addClass('dark')
			theme = 'dark'
			colourText();
			
	} else {
			$('.header-banner.random-banner').removeClass('dark')
			theme = 'light'
			colourText();
		
	}

}

function headerBannerClick(e, obj) {

	    if (e.target == obj){
			setBannerImage();
	    }
	
}

function sidTheDogImageClick(obj) {
		  		
		consantVelocity = consantVelocity * 5;
		  
		var leftPos  = $(obj)[0].getBoundingClientRect().left;
		var topPos   = $(obj)[0].getBoundingClientRect().top;
		$(obj).css({ top: topPos, left: leftPos });
		$(obj).addClass("random rotating1");
		startRandomLocation(); 

}

function burgerIconClick(obj) {
		 
		$('.header').toggleClass('show-mobile-menu');
		if ($('.header').hasClass('show-mobile-menu'))  {
			$('.textColour').each(function( index ) {
			  $(this).css("color", 'black');
			});
		}
		else {
			colourText();
		}

}

function emailSubscribeClick(obj) {
		 
		var email = $(obj).prev('input[type="text"]').val();
		
		if (isEmail(email)) {
			var message =  email + " has been subscribed to Sinéad's mailing list!";
			alertMessage(message);			
		} else {
			var message = "Please try again with a valid email :)";
			alertMessage(message);			
		}
		

}


function alertMessage(text) {
		 
		$('.alert .alert-inner').text(text);
		$('.alert').show();
		$('.alert').delay(10000).fadeOut('slow');

}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
