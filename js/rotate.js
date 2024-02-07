var consantVelocity = 0.02;

$(document).ready(function () {

    startRandomLocation();

});


function startRandomLocation() {

	$('.random').each(function( index ) {
			animateDiv(this);		
	});

};

function animateDiv(div) {

    var newq = makeNewPosition();
    var oldq = $(div).offset();
    var duration = calcDuration([oldq.left, oldq.top], newq);

    $(div).animate({ left: newq[0], top: newq[1] }, duration, 'linear', function () {
        animateDiv(div);
    });

};

function makeNewPosition() {

    // create random position for icon to move to
    //subtract twice the height width of the div so that no part of the icon is off screen
    var h = $(window).height() - $('.random').height() * 2;
    var w = $(window).width() - $('.random').width() * 2;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    //return x, y
    return [nw, nh];

}

function calcDuration(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var distance = Math.sqrt(x * x + y * y);

    var duration = Math.ceil(distance / consantVelocity);

    return duration;

}