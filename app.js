(function ($) {
  $(document).ready(function () {
    //----  scrollorama -------------
    //    --  start scrollorama for parallax effect
    var scrollorama = $.scrollorama({
      blocks: ".scrollblock",
    });

    scrollorama
      .animate("#shard-1", {
        delay: 0,
        duration: 600,
        property: "top",
        start: 200,
        end: 20,
      })
      .animate("#shard-2", {
        delay: 0,
        duration: 1200,
        property: "top",
        start: 400,
        end: 120,
      })
      .animate("#shard-3", {
        delay: 200,
        duration: 1200,
        property: "top",
        start: 500,
        end: 150,
      })
      .animate("#shard-4", {
        delay: 200,
        duration: 600,
        property: "top",
        start: 800,
        end: 50,
      })
      .animate("#shard-5", {
        delay: 200,
        duration: 800,
        property: "top",
        start: 1000,
        end: 500,
      })
      .animate("#shard-6", {
        delay: 300,
        duration: 1000,
        property: "top",
        start: 1200,
        end: 800,
      });
    //----  scrollorama -------------

    $(".hotspot-btn").click(function (e) {
      // prevent defualt event for button
      e.preventDefault();
      $(" .hotspot-btn").removeClass("active");
      $(this).addClass("active");
      var $target = $(".human-body " + $(this).attr("data-target"));
      $(".human-body .hotspot").removeClass("active");
      $target.addClass("active");

      $(".human-body svg").append($target);
    });
    $(".human-body .hotspot").click(function () {
      $(".hotspot-btn").removeClass("active");
      $('.hotspot-btn[data-target="#' + $(this).attr("id") + '"]').addClass(
        "active"
      );
      $(".human-body .hotspot").removeClass("active");
      $(this).addClass("active");
    });
  });
  onResize();
  $(window).on("resize", onResize());
  function onResize() {
    if ($(window).width() < 767) {
      $(".human-body .hotspot").click(function () {
        $(".hotspot-list").animate(
          {
            scrollLeft: $(
              '.hotspot-btn[data-target="#' + $(this).attr("id") + '"]'
            ).position().left,
          },
          "slow"
        );
      });
    }
  }
})(jQuery);
