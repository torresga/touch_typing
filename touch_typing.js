$(document).ready(function() {
  var level;
  var correctLetters = [];
  var totalLetters = [];

  if (window.location.href.substr(window.location.href.lastIndexOf("/")+1) == "index.html") {
    $('a').on('click', function() {
      
      if ($('a:contains("LEVEL 1")')) {
       level = $('#first-row');
       window.location.href = "keyboard.html";
      }
      // when level 2 is clicked, go to level 2 function
    //  else if $('a:contains("LEVEL 2")') {
  //      level = '#second-row';
    //  }
      // when level 3 is clicked, go to level 3 function
   //   else if $('a:contains("LEVEL 3")') {
    //    level = '#third-row';
    //  }
      // when numbers is clicked, go to number function
    //  else if ('a:contains("LEVEL 4")') {
     //   level = '.key';
    //  }
      // when together is clicked, go to together function
      // when freestyle is clicked, go to freestyle function
    //  $(this).css('background-color', 'magenta');
   });
    
 }

  function getRandomKeys(section) {
    keys = $(section).text().replace(/\s/g, "").split("");
    var randomNumber = Math.floor(Math.random() * keys.length);
    var randomKey = keys[randomNumber];
    return randomKey;
  }

  function setTextToType(letter) {
    $("#text-to-type").text(letter);
  }
  
  var letter = getRandomKeys("#first-row .key");
  // find text in dom that matches letter
  $(".key:contains(" + letter + ")").toggleClass("selected");
  setTextToType(letter);

  $("form").on("keypress", function(e){

    $(".shift").toggleClass("selected", false);

    var keypressed = String.fromCharCode(e.keyCode);
    // if keyCode is less than 65 chances are it's punctuation
    // keyCodes from 91 to 96 are also punctuation
    // so are 123 to 126

    //if lowercase letters
    if (96 < keypressed < 123) {
      keypressed = keypressed.toUpperCase();
    }

    if (keypressed == letter) {
      correctLetters.push(keypressed);
      var newLetter = getRandomKeys('#first-row .key');
      // get a new letter if we get two in a row
      if (newLetter == letter) {
        newLetter = getRandomKeys('#first-row .key');
      }

      // if newletter is contained in a sup then highlight the shift keys
      if (($("sup:contains(" + newLetter + ")").length > 0)) {
        $(".shift").toggleClass("selected", true);
        if (keypressed != newLetter) {
          $(".shift").toggleClass("selected", true);
        }
      }

      $(".key:contains(" + letter + ")").toggleClass("selected");
      $(".key:contains(" + newLetter + ")").toggleClass("selected");

      setTextToType(newLetter);
      letter = newLetter;
  }

  totalLetters.push(keypressed);
});
              
window.setTimeout(function(){ alert("time is up!! here is the percentage you got right" + (Math.ceil((correctLetters.length / totalLetters.length) * 100 ))); }, 10000);
});
    