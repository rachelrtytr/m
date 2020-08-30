$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    })
  
     $('.daybuy span').each(function(){
    var me = $(this),t=me.html().split(' ');
    me.html('<strong class="firstWord">'+t.shift()+'</strong> '+t.join(' '));
});
    
    
    
$('.reviews').slick({
  dots: false,
  infinite: true,
  speed: 300,
    autoplay:true,
    autoplaySpeed: 7000,
  adaptiveHeight:true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
  ]
});
    
});

