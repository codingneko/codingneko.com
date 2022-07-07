// You're going to have to edit the cookie manually.

function execTyped(strings){
  var typed = new Typed("#intro-text", {
    strings: strings,
    typeSpeed: 10,
    backSpeed: 0,
    backDelay: 1500,
    startDelay: 1000,
    loop: false
  });
}



switch (findCookie()) {
  case "988092e5c658d90b0712f71793375577ba077cc3e3f4c5ff43c309dbaf4b678d":
    alert("You're in level 1");
    execTyped(["<p style='color:#0F0; display:inline;'>Easy enough, right?</p>", "<p style='color:#0F0; display:inline;'>This is going to be a bit harder.</p>", "<p style='color:#0F0; display:inline;'>I'll be impressed if you complete this level.</p>", "<p style='color:#0F0; display:inline;'> Good Luck."]);
    $(".main").show();
    break;
  case "2":
    alert("Good job, you're in level 2, find the way forward.");
    execTyped(["<p style='color:#0F0; display:inline;'>Good job, you completed level 1.</p>", "<p style='color:#0F0; display:inline;'>I'm quite impressed.</p>", "<p style='color:#0F0; display:inline;'>Now find the way forward.</p>"]);
    $(".main").show();
    break;
  default:
    alert("Please go back and complete level 0 before attempting level 1");
    $("html").html('<meta http-equiv="Refresh" content="0; url=..">');
}

function findCookie() {
  var result;

  document.cookie.split(';').forEach((e) => {
    if (!e.includes('=')) {
      result = e.replace(' ', '');
    }
  });

  return result;
}