$(document).ready(function(){
  $('#paraLoad').hide();
    $('#btnSubmit').click(function(){
      var inputValue = $('#initalNumVal').val();
      if (inputValue > 0) {
        //$('#mainHeader').fadeIn(300);
        $('#paraLoad').text("Calculating...");
        $('#paraLoad').fadeIn(1400);

        $('#btnSubmit').attr("disabled", true);
        $('#paraLoad').fadeOut(700);
        //$('#mainHeader').show(1500);

      };
      if (inputValue <= 0 || inputValue == null) {
        $('#btnSubmit').attr("disabled", false);
        alert('Must be a positive integer!');
      };
    });
});
