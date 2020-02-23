function Artwork(name, price, small, large) {
  this.name  = name;
  this.price = price;
  this.small = small;
  this.large = large;
}

function clickImage() {
  $("img").click(function(){
    $('#display').html('');
    $(this).removeClass('hover');
    var currIndex = $('img').index(this) - 1;
    var name      = artwork[currIndex].name;
    var price     = artwork[currIndex].price;
    $(this).parent().append('<p class="info">Name: ' + name + '<br>Price: ' + price +'</p>');
    $('.info').delay(5000).fadeOut(800);
  });
}

function hoverImage() {
  $("img")
  .mouseenter(function(){
      var currIndex = $('img').index(this) - 1;
      const large = new Image();
      large.src   = artwork[currIndex].large;
      $('#display').append(large);
      $(this).addClass('hover');
  })
  .mouseleave(function(){
      $('img').removeClass('hover');
      $('#display').html('');
  });
}

function createThumbnail() {
  for (i = 0; i < artwork.length; i++) {
      const img    = new Image();
      const newDiv = document.createElement('div');
      img.dataset.index = i;
      img.src = artwork[i].small;
      newDiv.append(img);
      $('#thumbnail').append(newDiv);
  }
}

// MAIN
let artwork = [
    new Artwork('Winter', '$180', 'images/winter.png', 'images/winter.png'),
    new Artwork('Summer', '$230', 'images/summer.png', 'images/summer.png'),
    new Artwork('Autumn', '$540', 'images/autumn.png', 'images/autumn.png'),
    new Artwork('Spring', '$120', 'images/spring.png', 'images/spring.png'),
    new Artwork('Campfire', '$100', 'images/campfire.png', 'images/campfire.png'),
];

createThumbnail();
clickImage();
hoverImage();
