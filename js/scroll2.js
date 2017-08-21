// Make home page video wrapper always take 100% width and height
function fullscreen() {
    var masthead = jQuery('.master-video-wrapper');
    var windowH = jQuery(window).height() - 50;
    var windowW = jQuery(window).width();

    masthead.width(windowW);
    masthead.height(windowH);
}

function headerParallax() {
    var st = jQuery(window).scrollTop();
    var headerScroll = jQuery('.master-body');

    if (st < 500) {
        headerScroll.css({
            'opacity': 1 - st / 1000,
            '-webkit-filter': 'blur(' + st / 90 + 'px)',
            '-moz-filter': 'blur(' + st / 90 + 'px)',
            '-o-filter': 'blur(' + st / 90 + 'px)',
            '-ms-filter': 'blur(' + st / 90 + 'px)',
            filter: 'blur(' + st / 90 + 'px)'
        });
        jQuery('.master-arrow').css('opacity', 0.5 - st / 250);
        headerScroll.css({
            '-webkit-transform': 'translateY(' + st / 7 + '%)',
            '-ms-transform': 'translateY(' + st / 7 + '%)',
            transform: 'translateY(' + st / 7 + '%)'
        });
    }
}

jQuery(document).ready(function() {

    jQuery(window).resize(fullscreen);
    jQuery(window).scroll(headerParallax);
    fullscreen();

});

// Make navbar dissapear when scroll down and appear when scroll up

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('#menu').outerHeight();

jQuery(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 200);

function hasScrolled() {
    var st = jQuery(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        jQuery('#menu').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('#menu').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
//.........................................................
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 600) {
        $("header").addClass("w3-green", { duration: 500 });
        $("header").addClass("mobile-disable");
    } else {
        $("header").removeClass("w3-green");
        $("header").removeClass("mobile-disable");
    }

    if ($(this).scrollTop() > 50 && window.matchMedia('(max-width: 768px)').matches) {
        document.getElementById("fh5co-header").style.display = 'none';
    } else {
        document.getElementById("fh5co-header").style.display = 'block';
    }
});
//.........................................................

$('a[href^=#]').on('click', function(e) {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 90
    }, 700);
    e.preventDefault();
});

//...............................................................

$(document).ready(function() {

    $('a[href$=myNav]').click(function() {
        document.getElementById("myNav").style.display = 'block';

        //window.location.href = 'founder.html#myNav';

    });
});


//......................box animate...................................
/* $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1300 || $(this).scrollTop()< 650) {
		document.getElementById("box1").style.display = "none";
    }
    else {
		document.getElementById("box1").style.display = "block";
    }
});
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 1900 || $(this).scrollTop()< 1400) {
		document.getElementById("box2").style.display = "none";
    }
    else {
		document.getElementById("box2").style.display = "block";
    }
});
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 2700 || $(this).scrollTop()< 2000) {
		document.getElementById("box3").style.display = "none";
    }
    else {
		document.getElementById("box3").style.display = "block";
    }
});
 */
//فتح الجائزة من زر القائمة
$('#open-founder')
    //.css({ cursor: "pointer" })
    .on('click', function() {
        openNav();

    })
    //فتح الاعوام في الجائزة
document.getElementsByClassName("tablink")[0].click();

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-blue");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("w3-blue");
}
//فتح النافي او الجائزة بارتفاع 100%

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    //document.getElementById("myNav").style.position = "absolute" ;
    document.getElementById("fh5co-header").style.display = "none";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("fh5co-header").style.display = "block";
}

//تحميل صور اكثر

/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/

$(function () {
    $("div").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 2).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});