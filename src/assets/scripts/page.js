(function ($) {
  $(function () {
    var off_ = $(window).width() > 1024 ? "20%" : "10%";
    $(".pageSection ").viewportChecker({
      classToAdd: "inView",
      offset: off_,
      callbackFunction: function (elem, action) {
        if ($(elem).hasClass("aboutSection")) {
          $("[data-count]").each(function () {
            var count_ = $(this).data("count"),
              target_ = $(this).find(">span");

            target_.prop("Counter", 0).animate(
              {
                Counter: count_,
              },
              {
                duration: 3000,
                easing: "swing",
                step: function (now) {
                  target_.text(Math.ceil(now));
                  // target_.attr("data-num", Math.ceil(now));
                },
              }
            );
          });
        }
      },
    });
    $(".pageBanner").viewportChecker({
      classToAdd: "inView",
    });

    setTimeout(function () {
      $("body").addClass("loadScale");
      setTimeout(function () {
        $("body").addClass("is-loaded");
      }, 600);
    }, 250);
  });
})(jQuery);
