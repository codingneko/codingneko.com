$(document).ready(function(){
  $.getJSON("https://catfact.ninja/fact", function(data){
    var fact = data["fact"];
    document.getElementById('catFact').innerHTML = fact;
  });
});
$(function(){
  setInterval(function(){
    $.getJSON("https://catfact.ninja/fact", function(data){
      var fact = data["fact"];
      document.getElementById('catFact').innerHTML = fact;
    });
  }, 30000);
});
