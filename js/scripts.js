// JavaScript/jQuery Business Logic
var romanArray = [];

function evalNumber(number) {
  if (number < 10) {
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
        alert("Enter a number.");
      }
    return romanArray.join("");
  }
 };
console.log(evalNumber(2));
// JavaScript/jQuery Front-End Logic
// $(document).ready(function() {
//   $("form#pig-latin-form").submit(function(event) {
//     event.preventDefault();
//
//     var englishString = $("input#english").val();
//     var englishLowerCase = englishString.toLowerCase();
//     var englishArray = englishLowerCase.split("");
//     pigArray = pigLatin(englishArray)
//
//     $(".translation").text(pigArray);
//     $("#result").show();
//   });
// });
