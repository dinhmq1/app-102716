var i, y, x, inputVal, inputValueLength, index, outputPara, output;

var outputPara = document.getElementById("paraOutputVal");
var outputParaX = document.getElementById("paraXVal");
var outputParaFingers = document.getElementById("paraFingers");
var outputParaToes = document.getElementById("paraToes");
var outputParaLoading = document.getElementById("paraLoading");
var divCountFingers = document.getElementById("divCountFingers");
var divCountMain = document.getElementById("divCountMain");
var divCountToes = document.getElementById("divCountToes");

function getCount() {
      inputValueLength = document.getElementById("initalNumVal").value;

      for (i = 1; i <= inputValueLength; i++) {
          (function(index) {
            setTimeout(function() {
            output = "";

            var strDivBy3 = " divided by 3 = ";
            var strDivBy5 = " divided by 5 = ";


            if (index % 3 == 0)
              output += "Fizz";
            if(output === "Fizz")
              outputParaFingers.innerHTML += "Fizz: " + index + strDivBy3 + index/3 + '<br>';

            if (index % 5 == 0)
              output += "Buzz";
            if(output === "Buzz")
              outputParaToes.innerHTML += "Buzz: " + index + strDivBy5 + index/5 + '<br>';

            x = output || index;
            outputParaX.innerHTML += x + ', ';
            //console.log(inputVal);
          ;}, i * 1000)
       })(i);
    }
    return;
}
function resetCount() {
  divCountFingers.innerHTML = '';
  divCountMain.innerHTML = '';
  divCountToes.innerHTML = '';
  document.location.reload(true);
  return;
}
