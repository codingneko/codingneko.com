$(function(){

  //typed.js stuff
  var options = {
     strings: ['','^2000Hey!', 'I\'m Cody', 'I\'m... ^1000 uhm...^1500', 'I\'m... A web developer', 'I also code server side applications', 'And do other fun stuff', 'Take a look!'],
     typeSpeed: 50,
     backSpeed: 20,
     cursorChar: ' ',
     smartBackspace: true
   }

  var typed4 = new Typed('.typed-div', options);

  //Buttons
  $("#toProjects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000);
  });

  $("#toCommunities").click(function() {
    $('html, body').animate({
        scrollTop: $("#Communities").offset().top
    }, 2000);
  });
});
