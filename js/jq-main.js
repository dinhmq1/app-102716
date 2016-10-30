$(document).ready(function(){
  var inputValue = $('#initalNumVal').val();
    $('#btnSubmit').click(function(){
      if (inputValue <= 0 || inputValue == null) {
        alert('Must be a positive integer!');
        return;
      };
      if (inputValue > 0 || inputValue != null) {
        $('#paraLoad').text("Calculating.....");
        $('#btnSubmit').attr("disabled", true);
        $('#paraLoad').fadeOut(900);
      };
    });
});
