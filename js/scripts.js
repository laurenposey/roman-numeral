// JavaScript/jQuery Business Logic
var romanArray = [];
var number;
var romanize = {

  evalNumber: function(number) {
    romanArray = [];
    if (number >= 10) {
      return this.tens(number);
    } else {
      return this.ones(number);
    }
  },

  tens: function(number) {
    var remainder = number % 10;
    var tens = Math.floor(number / 10);
    if (tens === 4) {
      romanArray.push("XL");
    } else if (tens === 9) {
      romanArray.push("XC");
    } else if (tens > 5 && tens < 9) {
      romanArray.push("L");
      for(var index1 = 0; index1 < (tens % 5); index1 += 1) {
        romanArray.push("X");
      }
    } else if (tens > 0 && tens < 4) {
      for(var index2 = 0; index2 < tens; index2 += 1) {
        romanArray.push("X");
      }
    } else {

    }
    return this.ones(remainder);
  },

  ones: function(number) {
    if (number === 4) {
      romanArray.push("IV");
    } else if (number === 9) {
      romanArray.push("IX");
    } else if (number > 5 && number < 9) {
      romanArray.push("V");
      var remainder = number % 5;
      for(var index1 = 0; index1 < remainder; index1 += 1) {
        romanArray.push("I");
      }
    } else if (number > 0 && number < 4) {
      for(var index2 = 0; index2 < number; index2 += 1) {
        romanArray.push("I");
      }
    } else {

    }
    return romanArray.join("");
  }
};

// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#roman-numeral-form").submit(function(event) {
    event.preventDefault();

    number = parseInt($("input#english-numeral").val());

    $(".conversion").text(romanize.evalNumber(number));
    $("#result").show();
  });
});
