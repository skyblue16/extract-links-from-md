$(document).ready(function() {
  $('#demo').hide();
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});

$('#showDemo').click(function() {
  $('#demo').toggle();
});

const extract = document.getElementById('extract');
extract.onclick = function myLinks() {
  let markdown = document.getElementById('txtInput').value;
  document.getElementById('result').innerHTML = markdownLinkExtractor(markdown);
};