$(document).ready(function(){
  $(".laser").click(function(){
    console.log("clicked");
    $.ajax({
      url: 'https://api.thinger.io/v2/users/ivocarbajo/devices/ESP8266/LASER?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJFU1A4MjY2IiwiaWF0IjoxNTA0OTcxMTI5LCJqdGkiOiI1OWI0MDk3OTU1NGE2Nzc4YzllOGI5MzciLCJ1c3IiOiJpdm9jYXJiYWpvIn0.IYMcvv6Qe_IeAG3mpzQehTAbTiWba7Qgt3zeZFpUtV4',
      type: 'POST',
      data: '{ "in": true }',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      async: false,
      success: function(msg) {
          console.log(msg);
      }
    });
    setTimeout(
    function()
    {
      $.ajax({
        url: 'https://api.thinger.io/v2/users/ivocarbajo/devices/ESP8266/LASER?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJFU1A4MjY2IiwiaWF0IjoxNTA0OTcxMTI5LCJqdGkiOiI1OWI0MDk3OTU1NGE2Nzc4YzllOGI5MzciLCJ1c3IiOiJpdm9jYXJiYWpvIn0.IYMcvv6Qe_IeAG3mpzQehTAbTiWba7Qgt3zeZFpUtV4',
        type: 'POST',
        data: '{ "in": false }',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
            console.log(msg);
        }
      });
    }, 1000);
  });
});
