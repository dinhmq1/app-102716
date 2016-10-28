function getCount() {
      for (var n = 0, len = document.getElementById("initalNumVal").value; n <= len; n++) {
        (function(index) {
          setTimeout(function() {
        var output = "";
        if (index % 3 == 0)
          output += "Fizz";
        if (index % 5 == 0)
          output += "Buzz";
        console.log(output || index);
      ;},n * 1000);
    })(n);
  }
}
