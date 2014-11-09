$(document).ready(function() {

  var getRandomKey = function() {
    keys = $(".key").text().replace(/\s/g, "").split("");

    var randomNumber = Math.floor(Math.random() * keys.length);
    var randomKey = keys[randomNumber];
    return randomKey;
  }

  var setTextToType = function(letter) {
    $("#text-to-type").text(letter);
  }
  
  var letter = getRandomKey();
  // find text in dom that matches letter
  $(".key:contains(" + letter + ")").css("background-color", "blue");
  setTextToType(letter);


  $("form").on("keypress", function(e){
    var keypressed = String.fromCharCode(e.keyCode);
    // if keyCode is less than 65 chances are it's punctuation
    // keyCodes from 91 to 96 are also punctuation
    // so are 123 to 126

    //if lowercase letters
    if (96 < keypressed < 123) {
      keypressed = keypressed.toUpperCase()
    }

    if (keypressed == letter) {
      var newLetter = getRandomKey();
      console.log(newLetter);
      $(".key:contains(" + letter + ")").css("background-color", "#1f1a1e");
      $(".key:contains(" + newLetter + ")").css("background-color", "blue");
      setTextToType(newLetter);
      letter = newLetter;
    }
  });
});