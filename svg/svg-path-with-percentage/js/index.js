$(document).on('click', 'a.button', function(e) {
  $('.wrapper').width(Math.floor(Math.random() * 60 + 20) + '%');
  e.preventDefault();
});