$(document).ready(function(){
    $('#btnSubmit').click(function(){
      var inputValue = $('#initalNumVal').val();
      if (inputValue > 0) {
        $('#paraLoad').text("Calculating.....");
        $('#btnSubmit').attr("disabled", true);
        $('#paraLoad').fadeOut(900);
      };
      if (inputValue <= 0 || inputValue == null) {
        $('#btnSubmit').attr("disabled", false);
        alert('Must be a positive integer!');
      };
    });
});
