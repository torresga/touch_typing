$(document).ready(function() {
  var letter = $("#text-to-type").text();
  // find text in dom that matches letter
  $(".key:contains(" + letter + ")").css("background-color", "blue");
});