var level = "";
var pgpkey = "";

$.ajax({
  url: "level.php",
  method: "POST",
  data: {
    cookie: findCookie(),
    auth_key: "FCPzUq4i1D5ADYpaviZj"
  },
  dataType: "html"
}).done(function(response){
  response = response.split(";");
  pgpkey = response[1];
  level = response[0];
});

$(document).ready(function(){
  setTimeout(function(){
    alert("You're in level " + level);

    console.log(level);


    switch (level) {
      case "1":
        /*
        this is not a security flaw, if you're clever enough
        to do it this way then you should skip level 0, still,
        the answer is easy enough that you should be able to find
        it really easily... much more than exploiting this...

        You tryhard...

        (you'll still need the answer to go to the next level lol)
        */

        var typed = new Typed("#intro-text", {
          strings: ["<p style='color:#0F0; display:inline;'>The text field <b>is case sensitive</b></p>"],
          typeSpeed: 10,
          backSpeed: 0,
          backDelay: 500,
          startDelay: 1000,
          loop: false
        });

        break;

      case "2":
        $("#comment").text("\r\n<!-- You need to go back.jpg -->\r\n");
        $("#verify").click(function(){
          var verification = $.ajax({
            url: "verify.php",
            method: "POST",
            data: {
              pw: $("#pw").val()
            },
            dataType: "html"
          });

          verification.done(function(reply){
            if(reply.split(";")[0] == "Correct"){
              alert("Correct. You're now in the next level, find the way to go forward");
              document.cookie = reply.split(";")[1];
            }else{
              alert(reply);
            }
          });
        });

        var typed = new Typed("#intro-text", {
          strings: ["<p style='color:#0F0; display:inline;'>The text field <b>is case sensitive</b></p>"],
          typeSpeed: 10,
          backSpeed: 0,
          backDelay: 500,
          startDelay: 1000,
          loop: false
        });
        break;

      case "3":
        console.log(pgpkey);
        var typed = new Typed("#intro-text", {
          strings: ["<p style='color:#0F0; display:inline;'>Good job, you're done here, for now.</p>", "<p style='color:#0F0; display:inline;'>\"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.\" - .cf?token=</p>"],
          typeSpeed: 10,
          backSpeed: 0,
          backDelay: 500,
          startDelay: 1000,
          loop: false
        });
        break;

      default:
        $("#verify").click(function(){
          var inputPw = $("#pw").val();

          if (SHA256(inputPw) == "988092e5c658d90b0712f71793375577ba077cc3e3f4c5ff43c309dbaf4b678d"){
            alert("Correct. You're now in the next level, find the way to go forward");
            document.cookie = "988092e5c658d90b0712f71793375577ba077cc3e3f4c5ff43c309dbaf4b678d;";
          }else{
            alert("Wrong.");
          }
        });

        var typed = new Typed("#intro-text", {
          strings: ["<p style='color:#0F0; display:inline;'>The text field <b>is case sensitive</b></p>"],
          typeSpeed: 10,
          backSpeed: 0,
          backDelay: 500,
          startDelay: 1000,
          loop: false
        });
    }
  }, 1000);
});


function findCookie() {
  var result;

  document.cookie.split(';').forEach((e) => {
    if (!e.includes('=')) {
      result = e.replace(' ', '');
    }
  });

  return result;
}