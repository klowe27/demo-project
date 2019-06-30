$(document).ready(() => {
  $("#search-icon").hover(() => {
    console.log('test');
    $("#search-input").toggle(1000);
  });
});