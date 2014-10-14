$(document).ready(function() {

  var getRandomKey = function() {
    var keys = $(".key");
    var randomNumber = Math.floor(Math.random() * keys.length);
    var randomKey = keys[randomNumber];
    return randomKey;
  }

  var setTextToType = function(letter) {
    $("#text-to-type").text($(letter).text());
  }
  
  var letter = getRandomKey();
  //var letter = $("#text-to-type").text();
  // find text in dom that matches letter
  $(".key:contains(" + $(letter).text() + ")").css("background-color", "blue");
  setTextToType(letter);


  $("form").on("keypress", function(e){
    var keypressed = String.fromCharCode(e.keyCode);
    if (keypressed.toUpperCase() == $(letter).text()) {
      var newLetter = getRandomKey();
      $(newLetter).css("background-color", "blue");
      $(".key:contains(" + $(letter).text() + ")").css("background-color", "magenta");
      setTextToType(newLetter);
      // define letter down here
      // oh yeah i should probably commit this
      letter = newLetter;
    }
  });
});