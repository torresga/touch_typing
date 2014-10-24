$(document).ready(function() {

  var getRandomKey = function() {
    keys = $(".key");

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
    // if keyCode is less than 65 chances are it's punctuation
    // keyCodes from 91 to 96 are also punctuation
    // so are 123 to 126
    debugger;
    if (keypressed.toUpperCase() == $(letter).text()) {
      var newLetter = getRandomKey();
      console.log(newLetter);
      $(".key:contains(" + $(letter).text() + ")").css("background-color", "#1f1a1e");
      $(newLetter).css("background-color", "blue");
      setTextToType(newLetter);
      letter = newLetter;
    }
  });
});