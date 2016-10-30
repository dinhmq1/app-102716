$(document).ready(function(){
  $('#paraLoad').hide();
    $('#btnSubmit').click(function(){
      var inputValue = $('#initalNumVal').val();

      if (inputValue.length == 0) {
        $('#btnSubmit').attr("disabled", false);
        alert('Input field is empty!');
        return;
      }

      if (inputValue <= 0) {
        $('#btnSubmit').attr("disabled", false);
        alert('Must be greater than 0!');
        return;
      }

      if (inputValue > 0 && inputValue != null) {
        //$('#mainHeader').fadeIn(300);
        $('#paraLoad').show();
        $('#paraLoad').text("Calculating...");

        $('#btnSubmit').attr("disabled", true);
        $('#paraLoad').fadeOut(1000);
        //$('#mainHeader').show(1500);
      }
      return inputValue;
    });
});
