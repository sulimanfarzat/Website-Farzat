/*
 *  Project: Scrolly : parallax is easy as a matter of fact !
 *  Description: Based on jQuery boilerplate
 *  Author: Victor C. / Octave & Octave web agency
 *  Licence: MIT
 */
(function ( $, window, document, undefined ) {
    // Create the defaults once
    var pluginName = 'scrolly',
        defaults = {
            bgParallax: false
        },
        didScroll = false;

    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(this.element);

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;
        this.startPosition = this.$element.position().top;
        this.offsetTop = this.$element.offset().top;
        this.height = this.$element.outerHeight(true);
        this.velocity = this.$element.attr('data-velocity');
        this.bgStart = parseInt(this.$element.attr('data-fit'), 10);

        $(document).scroll(function(){
            self.didScroll = true;
        });
        
        setInterval(function() {
            if (self.didScroll) {
                self.didScroll = false;
                self.scrolly();
            }
        }, 10);
    };

    Plugin.prototype.scrolly = function() {
        var dT =  $(window).scrollTop(),
            wH = $(window).height(),
            position = this.startPosition;

        if(this.offsetTop >= (dT+wH)) {
            this.$element.addClass('scrolly-invisible');
        } else {
            if(this.$element.hasClass('scrolly-invisible')){
                position = this.startPosition + (dT + ( wH - this.offsetTop ) ) * this.velocity;
            } else {
                position = this.startPosition + dT  * this.velocity;
            }
        }
        // Fix background position
        //if(this.bgStart){ position = position + this.bgStart; }
        if($(window).height()>1190){
            position = position + 400;
        }
        else{
            position = position + 100;
        }



        if(this.options.bgParallax === true) {
            this.$element.css({backgroundPosition: '50% '+position+'px'});
        } else {
            this.$element.css({top: position});
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})(jQuery, window, document);







$(document).ready(function(){
	if($(window).width()>401){
		$('.parallax').scrolly({bgParallax: true});
	}

	$(".jump").each(function(){
		$(this).click(function() {
			$('html, body').animate({
				scrollTop: $("#"+$(this).attr("data-jumpto")).offset().top-$(window).height()/2+$("#"+$(this).attr("data-jumpto")).height()/2
			}, 600);
		});
	});


	$("#homeGetStartedButton").click(function(event){
		event.preventDefault();
		$("#homeFadeOut").addClass("fadeOutRight animated");
		$("#homeFadeIn").addClass("fadeInLeft animated").css("z-index","447");
	});



	$("#priceTryButton").click(function(event){
		event.preventDefault();
		$("#schoolsGridButtons").addClass("fadeOutRight animated");
		$("#schoolsTrySeg").addClass("fadeInLeft animated").css("z-index","447");
	});
	$("#priceSignUpButton").click(function(event){
		event.preventDefault();
		$("#schoolsGridButtons").addClass("fadeOutRight animated");
		$("#schoolsSignUpSeg").addClass("fadeInLeft animated").css("z-index","447");
	});

	$( document ).scroll(triggerAnimations);
	
});

function triggerAnimations(){
	$( ".animate" ).each(function( index ) {
		inimation = this.getAttribute("data-inimation");
		outimation = this.getAttribute("data-outimation");
		if(isScrolledIntoView(this) && !$(this).data("animated")){
				$(this).removeClass(outimation).addClass('animated '+inimation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('animated '+inimation).addClass('animate');
				$(this).data("animated",true);
			});
		}
		if(!isScrolledIntoView(this)){
			$(this).data("animated",false);
			$(this).addClass('animated '+outimation);
		}
	});
}

function isScrolledIntoView(elem){
	//http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
	  && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}