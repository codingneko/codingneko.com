function selectText(containerid) {
    if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  }

  var birthDate = new Date(1998, 3, 28);
  var date = new Date();

  var currentAge = Math.floor((date.getTime() - birthDate.getTime()) / 31556926000);

  $("#age").text(currentAge);
  $(".progress-completed").width(currentAge + "%");

  $("#toAbout").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 2000);
  });

  $("#toProjects").click(function() {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 2000);
  });

  $("#icon-discord").click(function(){
    $("#discord").fadeIn("slow");
  });

  $("#discord-close").click(function(){
    $("#discord").fadeOut("slow");
  });

  $("#discord-tag").click(function(){
    selectText("discord-tag");
  });

  $("#tilt").tilt({
    scale: 1.05,
    easing: "cubic-bezier(.01,.03,.83,2)"
  });