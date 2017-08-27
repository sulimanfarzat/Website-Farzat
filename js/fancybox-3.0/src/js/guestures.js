// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
; (function (window, document, $) {
    'use strict';

    var requestAFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();


    var pointers = function (e) {
        var result = [];

        e = e.originalEvent || e || window.e;
        e = e.touches && e.touches.length ? e.touches : (e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]);

        for (var key in e) {

            if (e[key].pageX) {
                result.push({ x: e[key].pageX, y: e[key].pageY });

            } else if (e[key].clientX) {
                result.push({ x: e[key].clientX, y: e[key].clientY });
            }
        }

        return result;
    };

    var distance = function (point2, point1, what) {

        if (!point1 || !point2) {
            return 0;
        }

        if (what === 'x') {
            return point2.x - point1.x;

        } else if (what === 'y') {
            return point2.y - point1.y;
        }

        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));

    };

    var isClickable = function ($el) {

        return $el.is('a') || $el.is('button') || $el.is('input') || $el.is('select') || $el.is('textarea') || $.isFunction($el.get(0).onclick);

    };

    var hasScrollbars = function (el) {
        var overflowY = window.getComputedStyle(el)['overflow-y'];
        var overflowX = window.getComputedStyle(el)['overflow-x'];

        var vertical = (overflowY === 'scroll' || overflowY === 'auto') && el.scrollHeight > el.clientHeight;
        var horizontal = (overflowX === 'scroll' || overflowX === 'auto') && el.scrollWidth > el.clientWidth;

        return vertical || horizontal;
    };

    var isScrollable = function ($el) {

        var rez = false;

        while (true) {
            rez = hasScrollbars($el.get(0));

            if (rez) {
                break;
            }

            $el = $el.parent();

            if (!$el.length || $el.hasClass('fancybox-slider') || $el.is('body')) {
                break;
            }

        }

        return rez;

    };


    var Guestures = function (instance) {

        var self = this;

        self.instance = instance;

        self.$wrap = instance.$refs.slider_wrap;
        self.$slider = instance.$refs.slider;
        self.$container = instance.$refs.container;

        self.destroy();

        self.$wrap.on('touchstart.fb mousedown.fb', $.proxy(self, "ontouchstart"));

    };

    Guestures.prototype.destroy = function () {

        this.$wrap.off('touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb');

    };

    Guestures.prototype.ontouchstart = function (e) {

        var self = this;

        var $target = $(e.target);
        var instance = self.instance;
        var current = instance.current;
        var $content = current.$content || current.$placeholder;

        self.startPoints = pointers(e);

        self.$target = $target;
        self.$content = $content;

        self.canvasWidth = Math.round(current.$slide[0].clientWidth);
        self.canvasHeight = Math.round(current.$slide[0].clientHeight);

        self.startEvent = e;

        // Skip if clicked on the scrollbar
        if (e.originalEvent.clientX > self.canvasWidth + current.$slide.offset().left) {
            return true;
        }

        // Ignore taping on links, buttons and scrollable items
        if (isClickable($target) || isClickable($target.parent()) || (isScrollable($target))) {
            return;
        }

        // If "touch" is disabled, then handle click event
        if (!current.opts.touch) {
            self.endPoints = self.startPoints;

            return self.ontap();
        }

        // Ignore right click
        if (e.originalEvent && e.originalEvent.button == 2) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        if (!current || self.instance.isAnimating || self.instance.isClosing) {
            return;
        }

        // Prevent zooming if already swiping
        if (!self.startPoints || (self.startPoints.length > 1 && !current.isMoved)) {
            return;
        }

        self.$wrap.off('touchmove.fb mousemove.fb', $.proxy(self, "ontouchmove"));
        self.$wrap.off('touchend.fb touchcancel.fb mouseup.fb mouseleave.fb', $.proxy(self, "ontouchend"));

        self.$wrap.on('touchend.fb touchcancel.fb mouseup.fb mouseleave.fb', $.proxy(self, "ontouchend"));
        self.$wrap.on('touchmove.fb mousemove.fb', $.proxy(self, "ontouchmove"));

        self.startTime = new Date().getTime();
        self.distanceX = self.distanceY = self.distance = 0;

        self.canTap = false;
        self.isPanning = false;
        self.isSwiping = false;
        self.isZooming = false;

        self.sliderStartPos = $.fancybox.getTranslate(self.$slider);

        self.contentStartPos = $.fancybox.getTranslate(self.$content);
        self.contentLastPos = null;

        if (self.startPoints.length === 1 && !self.isZooming) {
            self.canTap = current.isMoved;

            if (current.type === 'image' && (self.contentStartPos.width > self.canvasWidth + 1 || self.contentStartPos.height > self.canvasHeight + 1)) {

                $.fancybox.stop(self.$content);

                self.isPanning = true;

            } else {

                $.fancybox.stop(self.$slider);

                self.isSwiping = true;
            }

            self.$container.addClass('fancybox-controls--isGrabbing');

        }

        if (self.startPoints.length === 2 && current.isMoved && !current.hasError && current.type === 'image' && (current.isLoaded || current.$ghost)) {

            self.isZooming = true;

            self.isSwiping = false;
            self.isPanning = false;

            $.fancybox.stop(self.$content);

            self.centerPointStartX = ((self.startPoints[0].x + self.startPoints[1].x) * 0.5) - $(window).scrollLeft();
            self.centerPointStartY = ((self.startPoints[0].y + self.startPoints[1].y) * 0.5) - $(window).scrollTop();

            self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
            self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

            self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
        }

    };

    Guestures.prototype.ontouchmove = function (e) {

        var self = this;

        e.preventDefault();

        self.newPoints = pointers(e);

        if (!self.newPoints || !self.newPoints.length) {
            return;
        }

        self.distanceX = distance(self.newPoints[0], self.startPoints[0], 'x');
        self.distanceY = distance(self.newPoints[0], self.startPoints[0], 'y');

        self.distance = distance(self.newPoints[0], self.startPoints[0]);

        // Skip false ontouchmove events (Chrome)
        if (self.distance > 0) {

            if (self.isSwiping) {
                self.onSwipe();

            } else if (self.isPanning) {
                self.onPan();

            } else if (self.isZooming) {
                self.onZoom();
            }

        }

    };

    Guestures.prototype.onSwipe = function () {

        var self = this;

        var swiping = self.isSwiping;
        var left = self.sliderStartPos.left;
        var angle;

        if (swiping === true) {

            if (Math.abs(self.distance) > 10) {

                if (self.instance.group.length < 2) {
                    self.isSwiping = 'y';

                } else if (!self.instance.current.isMoved || self.instance.opts.touch.vertical === false || (self.instance.opts.touch.vertical === 'auto' && $(window).width() > 800)) {
                    self.isSwiping = 'x';

                } else {
                    angle = Math.abs(Math.atan2(self.distanceY, self.distanceX) * 180 / Math.PI);

                    self.isSwiping = (angle > 45 && angle < 135) ? 'y' : 'x';
                }

                self.canTap = false;

                self.instance.current.isMoved = false;

                // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
                self.startPoints = self.newPoints;
            }

        } else {

            if (swiping == 'x') {

                // Sticky edges
                if (!self.instance.current.opts.loop && self.instance.current.index === 0 && self.distanceX > 0) {
                    left = left + Math.pow(self.distanceX, 0.8);

                } else if (!self.instance.current.opts.loop && self.instance.current.index === self.instance.group.length - 1 && self.distanceX < 0) {
                    left = left - Math.pow(-self.distanceX, 0.8);

                } else {
                    left = left + self.distanceX;
                }

            }

            self.sliderLastPos = {
                top: swiping == 'x' ? 0 : self.sliderStartPos.top + self.distanceY,
                left: left
            };

            requestAFrame(function () {
                $.fancybox.setTranslate(self.$slider, self.sliderLastPos);
            });
        }

    };

    Guestures.prototype.onPan = function () {

        var self = this;

        var newOffsetX, newOffsetY, newPos;

        self.canTap = false;

        if (self.contentStartPos.width > self.canvasWidth) {
            newOffsetX = self.contentStartPos.left + self.distanceX;

        } else {
            newOffsetX = self.contentStartPos.left;
        }

        newOffsetY = self.contentStartPos.top + self.distanceY;

        newPos = self.limitMovement(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

        newPos.scaleX = self.contentStartPos.scaleX;
        newPos.scaleY = self.contentStartPos.scaleY;

        self.contentLastPos = newPos;

        requestAFrame(function () {
            $.fancybox.setTranslate(self.$content, self.contentLastPos);
        });
    };

    // Make panning sticky to the edges
    Guestures.prototype.limitMovement = function (newOffsetX, newOffsetY, newWidth, newHeight) {

        var self = this;

        var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY;

        var canvasWidth = self.canvasWidth;
        var canvasHeight = self.canvasHeight;

        var currentOffsetX = self.contentStartPos.left;
        var currentOffsetY = self.contentStartPos.top;

        var distanceX = self.distanceX;
        var distanceY = self.distanceY;

        // Slow down proportionally to traveled distance

        minTranslateX = Math.max(0, canvasWidth * 0.5 - newWidth * 0.5);
        minTranslateY = Math.max(0, canvasHeight * 0.5 - newHeight * 0.5);

        maxTranslateX = Math.min(canvasWidth - newWidth, canvasWidth * 0.5 - newWidth * 0.5);
        maxTranslateY = Math.min(canvasHeight - newHeight, canvasHeight * 0.5 - newHeight * 0.5);

        if (newWidth > canvasWidth) {

            //   ->
            if (distanceX > 0 && newOffsetX > minTranslateX) {
                newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
            }

            //    <-
            if (distanceX < 0 && newOffsetX < maxTranslateX) {
                newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
            }

        }

        if (newHeight > canvasHeight) {

            //   \/
            if (distanceY > 0 && newOffsetY > minTranslateY) {
                newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
            }

            //   /\
            if (distanceY < 0 && newOffsetY < maxTranslateY) {
                newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
            }

        }

        return {
            top: newOffsetY,
            left: newOffsetX
        };

    };


    Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {

        var self = this;

        var canvasWidth = self.canvasWidth;
        var canvasHeight = self.canvasHeight;

        if (newWidth > canvasWidth) {
            newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
            newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;

        } else {

            // Center horizontally
            newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);

        }

        if (newHeight > canvasHeight) {
            newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
            newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;

        } else {

            // Center vertically
            newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);

        }

        return {
            top: newOffsetY,
            left: newOffsetX
        };

    };

    Guestures.prototype.onZoom = function () {

        var self = this;

        // Calculate current distance between points to get pinch ratio and new width and height

        var currentWidth = self.contentStartPos.width;
        var currentHeight = self.contentStartPos.height;

        var currentOffsetX = self.contentStartPos.left;
        var currentOffsetY = self.contentStartPos.top;

        var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

        var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

        var newWidth = Math.floor(currentWidth * pinchRatio);
        var newHeight = Math.floor(currentHeight * pinchRatio);

        // This is the translation due to pinch-zooming
        var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
        var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

        //Point between the two touches

        var centerPointEndX = ((self.newPoints[0].x + self.newPoints[1].x) / 2) - $(window).scrollLeft();
        var centerPointEndY = ((self.newPoints[0].y + self.newPoints[1].y) / 2) - $(window).scrollTop();

        // And this is the translation due to translation of the centerpoint
        // between the two fingers

        var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
        var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

        // The new offset is the old/current one plus the total translation

        var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
        var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

        var newPos = {
            top: newOffsetY,
            left: newOffsetX,
            scaleX: self.contentStartPos.scaleX * pinchRatio,
            scaleY: self.contentStartPos.scaleY * pinchRatio
        };

        self.canTap = false;

        self.newWidth = newWidth;
        self.newHeight = newHeight;

        self.contentLastPos = newPos;

        requestAFrame(function () {
            $.fancybox.setTranslate(self.$content, self.contentLastPos);
        });

    };

    Guestures.prototype.ontouchend = function (e) {

        var self = this;

        var current = self.instance.current;

        var dMs = Math.max((new Date().getTime()) - self.startTime, 1);

        var swiping = self.isSwiping;
        var panning = self.isPanning;
        var zooming = self.isZooming;

        self.endPoints = pointers(e);

        self.$container.removeClass('fancybox-controls--isGrabbing');

        self.$wrap.off('touchmove.fb mousemove.fb', $.proxy(this, "ontouchmove"));
        self.$wrap.off('touchend.fb touchcancel.fb mouseup.fb mouseleave.fb', $.proxy(this, "ontouchmove"));
    };
});