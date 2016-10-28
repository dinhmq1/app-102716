var i, len, output, newElem, resultNum, index, initalNumVal;

function getMyNum() {
  i = i - 1;
  for (i = 1, len = document.getElementById("initalNumVal").value; i <= len; i++) {
    (function(index) { // Immediately Invoked Function Expression (IIFE)
      setTimeout(function() {
        output = "";
        newElem = document.createElement("BR");
        resultNum =  document.getElementById("title1");

        if (index % 3 === 0)
          output += "Fingers";
        if (index % 5 === 0)
          output += "Toes";
        if (i % 3 === 0 && i % 5 === 0)
          output += "FingersToes";
          //console.log(index);

        resultNum.insertBefore(newElem, index[i]);
        resultNum.innerHTML += output || index;}, i * 1000);
      })(i);
  }
}

function restartFn() {

  for (i = 0; i <= len; i++) {
        initialNum = document.getElementById("title1");
        initialNum.removeChild(initialNum.childNodes[0]);
        initialNum.removeChild(initialNum.childNodes[0]);
  }
  getMyNum();
  console.log(len);
  if(len <= 0) {
    alert('Please use positive integers!');
  }
}

function resetFn() {
  if(i == null || len == null) {
    alert('There is nothing to reset!');
  } else {
    document.getElementById("myForm").reset();
  }
}
