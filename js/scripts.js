$(document).ready(() => {
  $("#search-icon").hover(() => {
    $("#search-input").toggle(1500);
  });
  $(".owl-carousel").owlCarousel();
  $(document).one("scroll", ()=>{
    $("#header").addClass("scrolled-header");
  });
  
  $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data){
    console.log(data);
    let events = "";
    let images = ["fun", "stage", "music", "guitar", "restaurant", "drinks", "cheers", "food", "nature", "friends"]
    
    for (let i = 1; i <= 10; i++) {
      events += `<div class="event-item"><img src="https://loremflickr.com/500/500/${images[i]}"><div class="event-content"><h3>`
      if (data[i].title.length < 50) {
        events += `${data[i].title}`
      } else {
        events += `${data[i].title.slice(0,50)}...`
      }
      events += `</h3><p>`
      if (data[i].body.length < 125) {
        events += `${data[i].body}`
      } else {
        events += `${data[i].body.slice(0,125)}...`
      }
      events += `</p></div></div>`
    }
    $("#events").html(events);
  });
});