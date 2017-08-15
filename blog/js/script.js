$(document).ready(function() {
  $(".post-header").click(function() {
    $(this).siblings(".post-content").slideToggle("slow");
  })

  $(".collapse-button").click(function() {
    $(this).parent().slideUp("slow");
  })

  $("#nav-icon").click(function() {
    $("#sidenav").css("width", "12em");
    $("body").css("overflow","hidden");
    $("body").bind("touchmove", function(e) {
      e.preventDefault();
    });
  })

  $("#sidenav-close").click(function() {
    $("#sidenav").css("width", "0");
    $("body").css("overflow","visible");
    $("body").unbind("touchmove");
  })
})

function filterPostByTag(t) {
  $(".post:not(." + t + ")").toggle();
}

function filterShowAll() {
  $(".post").show();
}
