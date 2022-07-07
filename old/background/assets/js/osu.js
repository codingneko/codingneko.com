$(function() {
  setInterval(function() {
    $.getJSON("https://osu.ppy.sh//api/get_user?k=d217de71720f664a91deebe001a3c0dc0504a63a&u=codingneko", function(data){
      var rank = data[0]["pp_rank"];
      document.getElementById('osuRank').innerHTML = "Your osu rank is: " + rank;
    });
  }, 2000);
});
