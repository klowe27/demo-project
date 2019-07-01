$(document).ready(() => {
  $("#search-icon").hover(() => {$("#search-input").toggle(1500);});
  
  $('#owl').owlCarousel({
    items : 1,
    dotsEach : true,
  });
  
  $(document).one("scroll", () => {$("#header").addClass("scrolled-header");});
  
  $(".card-widget-item").hover(e => {
    $(e.target).children().toggle();
    $(e.target).toggleClass('card-overlay');
  });
  
  
  $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data){
    let events = "";
    let images = ["fun", "stage", "music", "guitar", "restaurant", "drinks", "cheers", "food", "nature", "friends"]
    
    for (let i = 1; i <= 10; i++) {
      events += `<div class="event-item"><img src="https://loremflickr.com/500/500/${images[i]}"><div class="event-content"><h3>${limitTitle(data[i].title)}</h3><p>${limitBody(data[i].body)}</p></div></div>`
      $("#events").html(events);
    }
  });
});

function limitTitle(title) {
  let newTitle = title.length < 50 ? title : `${title.slice(0,50)}...`
  let capitalizedNewTitle = []; 
  newTitle.split(" ").forEach(function(word){
    capitalizedNewTitle.push(capitalizeFirstLetter(word));
  });
  return capitalizedNewTitle.join(" ");
}

function limitBody(body) {
  let newBody = body < 125 ? body : `${body.slice(0,125)}...`
  return capitalizeFirstLetter(newBody);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

