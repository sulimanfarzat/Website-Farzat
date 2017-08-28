//// Make home page video wrapper always take 100% width and height
//function fullscreen() {
//    var masthead = jQuery('.master-video-wrapper');
//    var windowH = jQuery(window).height() - 50;
//    var windowW = jQuery(window).width();

//    masthead.width(windowW);
//    masthead.height(windowH);
//}

//function headerParallax() {
//    var st = jQuery(window).scrollTop();
//    var headerScroll = jQuery('.master-body');

//    if (st < 500) {
//        headerScroll.css({
//            'opacity': 1 - st / 1000,
//            '-webkit-filter': 'blur(' + st / 90 + 'px)',
//            '-moz-filter': 'blur(' + st / 90 + 'px)',
//            '-o-filter': 'blur(' + st / 90 + 'px)',
//            '-ms-filter': 'blur(' + st / 90 + 'px)',
//            filter: 'blur(' + st / 90 + 'px)'
//        });
//        jQuery('.master-arrow').css('opacity', 0.5 - st / 250);
//        headerScroll.css({
//            '-webkit-transform': 'translateY(' + st / 7 + '%)',
//            '-ms-transform': 'translateY(' + st / 7 + '%)',
//            transform: 'translateY(' + st / 7 + '%)'
//        });
//    }
//}

//jQuery(document).ready(function() {

//    jQuery(window).resize(fullscreen);
//    jQuery(window).scroll(headerParallax);
//    fullscreen();

//});

//// Make navbar dissapear when scroll down and appear when scroll up

//var didScroll;
//var lastScrollTop = 0;
//var delta = 5;
//var navbarHeight = jQuery('#menu').outerHeight();

//jQuery(window).scroll(function(event) {
//    didScroll = true;
//});

//setInterval(function() {
//    if (didScroll) {
//        hasScrolled();
//        didScroll = false;
//    }
//}, 200);

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
//if (typeof foo !== 'undefined') {
    // Now we know that foo is defined, we are good to go.
    $('a[href^=#]').on('click', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top - 90
        }, 700);
        e.preventDefault();
    });
//}


//...............................................................

$(document).ready(function() {

    $('a[href$=myNav]').click(function() {
        document.getElementById("myNav").style.display = 'block';

        //window.location.href = 'founder.html#myNav';

    });
});
//...............................................................

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
    var elm = document.getElementById("loadMore");
    var more = document.getElementsByClassName("more");
    var loader = document.getElementsByClassName("loader");
    var le = loader.length - 6;
    $(".loader").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {

        e.preventDefault();
        if (elm.value === "keyboard_arrow_down") {
            $(".loader:hidden").slice(0, le).slideDown();
            if ($(".loader:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            more[0].innerHTML = "Show less";
            elm.value = "keyboard_arrow_up";

        }
        else if (elm.value === "keyboard_arrow_up") {
            more.innerHTML = "Show more";
            $(".loader").slice(0, le).slideUp();
            elm.value = "keyboard_arrow_down";
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top -90
        }, 2000);
    });
});

$(function () {
    var elm = document.getElementById("loadMoreProd");
    var more = document.getElementsByClassName("more");
    var loader = document.getElementsByClassName("loaderprod");
    var le = loader.length - 6;
    $(".loaderprod").slice(0, 6).show();
    $("#loadMoreProd").on('click', function (e) {

        e.preventDefault();
        if (elm.value === "keyboard_arrow_down") {
            $(".loaderprod:hidden").slice(0, le).slideDown();
            if ($(".loaderprod:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            more[1].innerHTML = "Show less";
            elm.value = "keyboard_arrow_up";

        }
        else if (elm.value === "keyboard_arrow_up") {
            more.innerHTML = "Show more";
            $(".loaderprod").slice(0, le).slideUp();
            elm.value = "keyboard_arrow_down";
            $("#load").fadeOut('slow');
        }

        $('html,body').animate({
            scrollTop: $(this).offset().top - 90
        }, 2000);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 700);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});