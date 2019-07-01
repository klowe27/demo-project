$(document).ready(() => {
  $(document).one("scroll", () => {$("#header").addClass("scrolled-header");});
  $("#search-icon").hover(() => {$("#search-input").toggle(1000);});
  $('.owl-carousel').owlCarousel({
    items: 1,
    dotsEach: true,
  });  
  
  $(".card-widget-item").hover(function() {
    $(this).find(".card-content").toggleClass("card-overlay");
    $(this).find(".card-widget-title, .card-widget-description, .more-button").toggle();
  });
  
  $(".image-container").each(function(i) {
    let imageClass = `image${i+1}`
    $(this).addClass(`${imageClass}`);
  });
  
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
  }).done(function(data){
    let events = "";
    let images = ["fun", "stage", "music", "guitar", "restaurant", "drinks", "cheers", "food", "nature", "friends"];
    
    for (let i = 1; i <= 10; i++) {
      events += `<div class="event-item"><img src="https://loremflickr.com/500/500/${images[i]}" alt="${images[i]}"><div class="event-content"><h3>${limitTitle(data[i].title)}</h3><p>${limitBody(data[i].body)}</p></div></div>`
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