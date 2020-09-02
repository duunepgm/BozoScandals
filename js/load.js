$(document).ready(function(){
  var images = [];
  var scandals = [];
  var colors = ["white","pink","salmon","coral","tomato","orange","lightyellow","palegoldenrod","khaki","darkseagreen","yellowgreen","olive","greenyellow","turquoise","darkcyan","powderblue","lightblue","skyblue","lavender","plum"];
  var background_style = "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))";
  getImage = function(){
      domtoimage.toJpeg(document.getElementById('image'), { quality: 0.95 })
          .then(function (dataUrl) {
              var link = document.createElement('a');
              link.download = 'BomDiaBozo.jpeg';
              link.href = dataUrl;
              link.click();
          });
  }
  
  $.getJSON("json/bozo.json", function( data ) {
      $.each(data,function(key,val){
          scandals.push({
              "title": val.title,
              "url": val.url
          });
      });
      var random_scandal = Math.floor(Math.random() * scandals.length);
      document.getElementById("scandal_text").innerHTML = scandals[random_scandal].title;
      document.getElementById("scandal_text").href = scandals[random_scandal].url;
  });
      
  $.getJSON("json/images.json", function( data ) {
      $.each(data,function(key,val){
          images.push(val.url);
      });
      var random_img = Math.floor(Math.random() * images.length);
      document.getElementById("image").style.backgroundImage = background_style + ', url("img/'+images[random_img]+'")';
      document.getElementById("metaimage").setAttribute("content","img/"+images[random_img]);
   });

  random_color = Math.floor(Math.random() * colors.length);
  document.getElementById("morning_text").style.color = colors[random_color];
});
