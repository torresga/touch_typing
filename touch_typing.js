$(document).ready(function() {

  if (window.location.href.substr(window.location.href.lastIndexOf("/")+1) == "index.html") {
    $('a').on('click', function() {
      // case when level 1 is clicked, go to level 1 function
      // when level 2 is clicked, go to level 2 function
      // when level 3 is clicked, go to level 3 function
      // when numbers is clicked, go to number function
      // when together is clicked, go to together function
      // when freestyle is clicked, go to freestyle function
      $(this).css('background-color', 'magenta');
   })
 }

  var getRandomKey = function() {
    keys = $(".key").text().replace(/\s/g, "").split("");

    var randomNumber = Math.floor(Math.random() * keys.length);
    var randomKey = keys[randomNumber];
    return randomKey;
  }

  var getRandomKeys = function(section) {
    keys = $(section).text().replace(/\s/g, "").split("");
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

      // get a new letter if we get two in a row
      if (newLetter == letter) {
        newLetter = getRandomKey();
      }

      // if newletter is contained in a sup then highlight the shift keys
      if ($("sup:contains(" + newLetter + ")").length > 0) {
        $("#shift-left").css("background-color", "blue");
        $("#shift-right").css("background-color", "blue");
      } else {
        $("#shift-left").css("background-color", "1f1a1e");
        $("#shift-right").css("background-color", "1f1a1e");
      }

      $(".key:contains(" + letter + ")").css("background-color", "#1f1a1e");
      $(".key:contains(" + newLetter + ")").css("background-color", "blue");

      setTextToType(newLetter);
      letter = newLetter;
    }
  });
});