// jQuery scroll-to plugin
!function(o,e,t){"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e[o]=t()}("jquery-scrollto",this,function(){var o,e,t;return o=e=window.jQuery||require("jquery"),e.propHooks.scrollTop=e.propHooks.scrollLeft={get:function(o,e){var t=null;return("HTML"===o.tagName||"BODY"===o.tagName)&&("scrollLeft"===e?t=window.scrollX:"scrollTop"===e&&(t=window.scrollY)),null==t&&(t=o[e]),t}},e.Tween.propHooks.scrollTop=e.Tween.propHooks.scrollLeft={get:function(o){return e.propHooks.scrollTop.get(o.elem,o.prop)},set:function(o){"HTML"===o.elem.tagName||"BODY"===o.elem.tagName?(o.options.bodyScrollLeft=o.options.bodyScrollLeft||window.scrollX,o.options.bodyScrollTop=o.options.bodyScrollTop||window.scrollY,"scrollLeft"===o.prop?o.options.bodyScrollLeft=Math.round(o.now):"scrollTop"===o.prop&&(o.options.bodyScrollTop=Math.round(o.now)),window.scrollTo(o.options.bodyScrollLeft,o.options.bodyScrollTop)):o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},t={config:{duration:400,easing:"swing",callback:void 0,durationMode:"each",offsetTop:0,offsetLeft:0},configure:function(o){return e.extend(t.config,o||{}),this},scroll:function(o,l){var r,n,s,i,p,c,f,a,d,u,g,h,T,w,m,y,L,b;return r=o.pop(),n=r.$container,s=r.$target,c=n.prop("tagName"),i=e("<span/>").css({position:"absolute",top:"0px",left:"0px"}),p=n.css("position"),n.css({position:"relative"}),i.appendTo(n),g=i.offset().top,h=s.offset().top,T=h-g-parseInt(l.offsetTop,10),w=i.offset().left,m=s.offset().left,y=m-w-parseInt(l.offsetLeft,10),f=n.prop("scrollTop"),a=n.prop("scrollLeft"),i.remove(),n.css({position:p}),L={},b=function(){return 0===o.length?"function"==typeof l.callback&&l.callback():t.scroll(o,l),!0},l.onlyIfOutside&&(d=f+n.height(),u=a+n.width(),T>f&&d>T&&(T=f),y>a&&u>y&&(y=a)),T!==f&&(L.scrollTop=T),y!==a&&(L.scrollLeft=y),n.prop("scrollHeight")===n.width()&&delete L.scrollTop,n.prop("scrollWidth")===n.width()&&delete L.scrollLeft,null!=L.scrollTop||null!=L.scrollLeft?n.animate(L,{duration:l.duration,easing:l.easing,complete:b}):b(),!0},fn:function(o){var l,r,n,s;l=[];var i=e(this);if(0===i.length)return this;for(r=e.extend({},t.config,o),n=i.parent(),s=n.get(0);1===n.length&&s!==document.body&&s!==document;){var p,c;p="visible"!==n.css("overflow-y")&&s.scrollHeight!==s.clientHeight,c="visible"!==n.css("overflow-x")&&s.scrollWidth!==s.clientWidth,(p||c)&&(l.push({$container:n,$target:i}),i=n),n=n.parent(),s=n.get(0)}return l.push({$container:e("html"),$target:i}),"all"===r.durationMode&&(r.duration/=l.length),t.scroll(l,r),this}},e.ScrollTo=e.ScrollTo||t,e.fn.ScrollTo=e.fn.ScrollTo||t.fn,t});

jQuery(document).ready(function($) {


    $('.start, .answers li').click(function(e) {
        $(this).parents('.slide').removeClass('active');
        $(this).parents('.slide').next('.slide').addClass('active');
        $('.progress').fadeIn();
        $('.progress').ScrollTo({
            duration: 400
        });
    });

    $('.back').click(function() {
        $(this).parents('.slide').removeClass('active');
        $(this).parents('.slide').prev('.slide').addClass('active');
        $('.progress').ScrollTo({
            duration: 400
        });
    });

    for (var i=0; i<=30; i++) {
        (function(i){
            $('.slide:nth-child('+i+') .start, .slide:nth-child('+i+') .answers li').click(function() {
                $('.bars span:nth-child('+i+')').addClass('active');
                if(i>12) {
                    $('.q-number').html('<i class="fa fa-check"></i>');
                } else {
                    $('.q-number').text(i);
                }
            });
            $('.slide:nth-child('+i+') .back').click(function() {
                $('.bars span:nth-child('+i+')').prev().removeClass('active');
                $('.bars span:last-child').removeClass('active');
                $('.q-number').text(i-2);
            });
        })(i);
    }

    $('.answers li').click(function() {
        $(this).parent().find('li').removeClass('active');
        $(this).toggleClass('active');
    });


    $('.last-slide .answers li').click(function() {

        $('.yin-yang').attr('src','images/yin-yang-full.png');

        // Calculate total score by getting the value from all of the inputs who's parent has a class of 'active'
        var sum = 0;
        $('.answers li.active').each(function() {
            sum += Number($(this).data('value'));
        });

        $('.result span').text(sum);

        // Result ranges
        if(sum >= 0 && sum <= 14) {
            var resultTitle = "Oh dear...";
            var resultCopy = "Uh-oh...what’s happened here? It seems like you haven’t got the grasp of this. Try to think about situations differently and how you would like others to treat you. You can turn this around, we think... ";
            $('.result-img').attr('src','images/result-6.jpg');
            $('.result .img-source').attr('href', 'https://pixabay.com/en/woman-poses-elearning-female-girl-1447082/');
        } else if(sum >= 15 && sum <= 20) {
            var resultTitle = "This is bad...";
            var resultCopy = "This is pretty bad…But look, it’s not over – you can still fix this! Remember to look at the world beyond yourself; you’ll be amazed what good karma you attract when you do!";
            $('.result-img').attr('src','images/result-5.jpg');
            $('.result .img-source').attr('href', 'https://pixabay.com/en/confused-woman-doubt-female-girl-2385799/');
        } else if(sum >= 21 && sum <= 29) {
            var resultTitle = "Work on it!";
            var resultCopy = "You’ve got some serious work to do! You tend realise the importance of compassion in some situations, but ignore it in others. Remember to consider situations differently; this will help you on your journey on attracting good karma.";
            $('.result-img').attr('src','images/result-4.jpg');
            $('.result .img-source').attr('href', 'https://www.pexels.com/photo/man-in-red-and-blue-v-neck-shirt-101584/');
        } else if(sum >= 30 && sum <= 35) {
            var resultTitle = "Nearly there...";
            var resultCopy = "It seems that you’re 50/50 about things. Recognising situations where you could help others, but letting your own desires takeover. You’re so close, just keep trying.";
            $('.result-img').attr('src','images/result-3.jpg');
            $('.result .img-source').attr('href', 'http://maxpixel.freegreatpicture.com/Athlete-Height-Level-Adventure-Arm-Boys-Assistance-1807524');
        } else if(sum >= 36 && sum <= 44) {
            var resultTitle = "Pretty good!";
            var resultCopy = "This is pretty impressive…It seems like you realise the importance of helping others and we all know we need more of that in this world! You are a lovely being, making positive decisions and attracting good karma.";
            $('.result-img').attr('src','images/result-2.jpg');
            $('.result .img-source').attr('href', 'https://pixabay.com/en/joy-freedom-release-happy-2483926/');
        } else if(sum >= 45 && sum <= 60) {
            var resultTitle = "Amazing!";
            var resultCopy = "You are the Karma King or Queen! You are extremely compassionate and selfless in situations, putting others before yourself. With this score, your karma levels are extremely high – no worries here! Well done!";
            $('.result-img').attr('src','images/result-1.jpg');
            $('.result .img-source').attr('href', 'https://www.pexels.com/photo/woman-in-sunglasses-on-grey-scale-photo-65121/');
        }

        $('.result-title').text(resultTitle);
        $('.result-copy').text(resultCopy);

        $(".result-fb").attr("href", "https://www.facebook.com/dialog/share?app_id=475519939462782&display=popup&quote="+resultTitle.replace(" ","+")+"+-+"+resultCopy.replace(" ","+")+"&href=http://tangledindesign.com/fl/karma-calculator&redirect_uri=http://tangledindesign.com/fl/karma-calculator");
    });


    // ------------------------------------------------------------------------
    // Make Facebook/Twitter buttons open in popup window
    // ------------------------------------------------------------------------
    $('.fb, .tweet, .result-fb, .result-tweet').click(function (event) {
        if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
        window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
    });

});




