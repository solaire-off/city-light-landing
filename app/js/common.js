$(function() {

  $("#block-preview").bgswitcher({
    images: [
             // "/img/preview-default.png",
             "/img/preview-red.png",
             "/img/preview-all.png",
             "/img/preview-orange.png",
             "/img/preview-all.png",
            ],

            interval: 6500,
            effect: 'clip',
            duration: 5500,
  });

  $( window ).resize(function() {

    if ($( window ).width() < 900){
        $("#block-preview").bgswitcher({
          effect: 'fade',
        })
      }
    else{
        $("#block-preview").bgswitcher({
          effect: 'clip',
        })
    }
  });


});
