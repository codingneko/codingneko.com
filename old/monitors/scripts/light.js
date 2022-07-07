setInterval(function(){
  $.getJSON("https://api.thinger.io/v2/users/ivocarbajo/devices/ESP8266/LIGHT?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJFU1A4MjY2IiwiaWF0IjoxNTA0OTcxMTI5LCJqdGkiOiI1OWI0MDk3OTU1NGE2Nzc4YzllOGI5MzciLCJ1c3IiOiJpdm9jYXJiYWpvIn0.IYMcvv6Qe_IeAG3mpzQehTAbTiWba7Qgt3zeZFpUtV4", function(data){
    console.log(data.out);
    var light = data.out / 1024 * 100;
    $(".progress-bar").attr("style", "width:" + light + '%');
    $(".progress-bar").attr("aria-valuenow", light);
  });
}, 1000);
