!function(o){var n=0;o(window).scroll(function(t){var e=o(window).scrollTop();10<e?o("body").addClass("scrolled"):o("body").removeClass("scrolled"),10<e&&o(".tooltipstered[data-tooltip-menu]").tooltipster("hide"),n<e?o("body").removeClass("scrolling_top"):o("body").addClass("scrolling_top"),n=e}),o(document).ready(function(){pgs_.hash_scroll(),pgs_.menuscrollToDiv(),pgs_.scroll_menu_active(),pgs_.burgger_menu(),pgs_.scroll_progress(),pgs_.window_hash_smooth_scroll(),o("[data-fancybox-modal]").fancybox({modal:!0}),o("[data-text-sp]").each(function(){o(this).splitLines({tag:"<span><i>"})}),10<o(window).scrollTop()?o("body").addClass("scrolled"):o("body").removeClass("scrolled"),pgs_.bodyVariable(),window.addEventListener("resize",function(){pgs_.bodyVariable()}),console.log("%c Developed by PGS (http://pgsuae.com/)","background: #45d98e; color: #fff;")})}(jQuery);var viewport=window.innerWidth,pgs_={bodyVariable:function(t){setTimeout(function(){$("body").css("--top_off",$("header").outerHeight()+"px"),$("body").css("--logo_h",$(".navbar-brand").outerHeight()+"px"),$("body").css("--footer_h",$("footer").outerHeight()+"px")},350)},number_counter:function(t){var e=0,o=t.dataset.number,n=Math.abs(Math.floor(3e3/o)),a=setInterval(function(){e+=1,(t.textContent=e)==t.dataset.number&&clearInterval(a)},n)},hash_scroll:function(){$("[data-scroll]").on("click",function(t){var e=$(this).data("scroll");$(e).length&&($("html, body").stop().animate({scrollTop:$(e).offset().top},500),t.preventDefault())})},burgger_menu:function(){$("body").on("click",".menu_trigger",function(t){var e=$(this),o=e.data("traget");e.toggleClass("active_"),$("body").toggleClass("menu_open"),$("#"+o).toggleClass("show")})},menuscrollToDiv:function(){$("body").on("click",".nav-link.scroll",function(t){t.preventDefault(),$(document).off("scroll"),$(this).closest(".navbar-nav").length&&($(".navbar-nav a.scroll").each(function(){$(this).parent().removeClass("active")}),$(this).parent().addClass("active"));var e=$(this).attr("data-href"),o=$(e);$(e).length?$("html, body").stop().animate({scrollTop:o.offset().top},500,"swing",function(){$(document).on("scroll"),$("body").hasClass("menu_open")&&$(".menu_trigger").trigger("click")}):window.location.href=$(this).attr("href")})},scroll_menu_active:function(){var n,a=$(".navbar-nav").find("a"),s=a.map(function(){var t=$($(this).attr("data-href"));if(t.length)return t}),r=100;1024<viewport?r=100:viewport<1024&&(r=$("header").outerHeight()),$(window).scroll(function(){var t=$(this).scrollTop()+r,e=s.map(function(){if($(this).offset().top<t)return this}),o=(e=e[e.length-1])&&e.length?e[0].id:"";n!==o&&(n=o,a.parent().removeClass("active").end().filter("[data-href='#"+o+"']").parent().addClass("active"))})},scroll_progress:function(){var n=document.querySelector(".progress-wrap path"),a=n.getTotalLength();n.style.transition=n.style.WebkitTransition="none",n.style.strokeDasharray=a+" "+a,n.style.strokeDashoffset=a,n.getBoundingClientRect(),n.style.transition=n.style.WebkitTransition="stroke-dashoffset 10ms linear";var t=function(){var t=$(window).scrollTop(),e=$(document).height()-$(window).height(),o=a-t*a/e;n.style.strokeDashoffset=o};t(),$(window).scroll(t);jQuery(window).on("scroll",function(){50<jQuery(this).scrollTop()?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").on("click",function(t){return t.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1})},progress_circle:function(){$(".footer_box").find("[data-percentage]").each(function(){var t=$(this),e=parseFloat(t.attr("data-percentage")),o=t.find(".number_ span"),n=(185-185*e/100).toFixed(2);t.hasClass("anim_done")||(t.find(".progress_").removeAttr("style"),setTimeout(function(){t.find(".progress_").css("stroke-dashoffset",n)},800),o.empty(),$({percentage:0}).stop(!0).animate({percentage:e},{duration:2e3,step:function(){var t=Math.round(10*this.percentage)/10;o.text(t)}}).promise().done(function(){o.text(e),t.addClass("anim_done")}))})},word_count:function(t){var e=t.match(/\S+/g);return{charactersNoSpaces:t.replace(/\s+/g,"").length,characters:t.length,words:e?e.length:0,lines:t.split(/\r*\n/).length}},word_lenght:function(){$("[data-length]").each(function(){var e=$(this),o=e.data("length");e.on("change paste keyup",function(){var t=pgs_.word_count(this.value);e.closest(".input-field").find(".character-counter").text(t.words+"/"+o),o<t.words?e.addClass("invalid"):e.removeClass("invalid")})})},height_into_width:function(){$("[data-h_into_w]").each(function(){var t=$(this),e=t.height();t.css("width",e)})},window_hash_smooth_scroll:function(){setTimeout(function(){var t=window.location.hash,e=$(t);e.length&&$("html, body").stop().animate({scrollTop:e.offset().top},500,function(){$("body").removeClass("scrolling_top")})},50)}};!function(o){o(function(){var t=1024<o(window).width()?"20%":"10%";o(".pageSection ").viewportChecker({classToAdd:"inView",offset:t,callbackFunction:function(t,e){o(t).hasClass("aboutSection")&&o("[data-count]").each(function(){var t=o(this).data("count"),e=o(this).find(">span");e.prop("Counter",0).animate({Counter:t},{duration:3e3,easing:"swing",step:function(t){e.text(Math.ceil(t))}})})}}),o(".pageBanner").viewportChecker({classToAdd:"inView"}),setTimeout(function(){o("body").addClass("loadScale"),setTimeout(function(){o("body").addClass("is-loaded")},600)},250)})}(jQuery);