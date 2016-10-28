$(document).ready(function(){
  $('#loadingGif').hide();
  $('#btnRestart').click(function(){
    $('#loadingGif').show();
    $('#loadingGif').fadeOut(1000);
  });
});
