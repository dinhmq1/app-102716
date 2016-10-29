var n, output, len, index, x, inputVal;
function getCount(inputVal) {
      for (n = 0, len = document.getElementById("initalNumVal").value; n <= len; n++) {
        (function(index) {
          setTimeout(function() {
          output = "";
          if (index % 3 == 0)
            output += "Fizz";
          if (index % 5 == 0)
            output += "Buzz";

          x = output || index;
          inputVal = x;
          document.getElementById("title1").innerHTML += x + '<br>';
      ;},n * 1000);
    })(n);
  }
}

function getOutput() {
  console.log();
};
