$(document).ready(function() {
  $('.refresh-block').click(function(){
    $('#st-container').removeClass('st-menu-open');
  });
	$('input').styler();
	$('.minus').click(function () {
	    var $input = $(this).parent().find('input');
	    var count = parseInt($input.val()) - 1;
	    count = count < 1 ? 1 : count;
	    $input.val(count);
	    $input.change();
	    return false;
	});
	$('.plus').click(function () {
	    var $input = $(this).parent().find('input');
	    $input.val(parseInt($input.val()) + 1);
	    $input.change();
	    return false;
	});
	$('#mb-main-menu').mental_menu();
	$('.mb-body').css({position: 'relative', overflow: 'hidden'}).perfectScrollbar({
     wheelSpeed: 20,
     wheelPropagation: false,
     suppressScrollX: true
   });
   $('.mb-body-left').css({position: 'relative', overflow: 'hidden'}).perfectScrollbar({
     wheelSpeed: 20,
     wheelPropagation: false,
     suppressScrollX: true
   });
   new UISearch( document.getElementById( 'sb-search' ) );
   $(".sb-search-input").addClass('animated fadeInRight');

   var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true
  })
  /**** UI Slider ****/
  $("#slider").slider({
	min: 0,
	max: 1000,
	values: [0,1000],
	range: true,
	stop: function(event, ui) {
		$("input#minCost").val($("#slider").slider("values",0));
		$("input#maxCost").val($("#slider").slider("values",1));
    },
    slide: function(event, ui){
		$("input#minCost").val($("#slider").slider("values",0));
		$("input#maxCost").val($("#slider").slider("values",1));
    }
  });
  /**** scrollreveal ****/
  /*window.sr = ScrollReveal();
  var hero = {
    origin   : "top",
    distance : "24px",
    duration : 1500,
    scale    : 1.05
  };

  var intro = {
    origin   : "bottom",
    distance : "64px",
    duration : 900,
    delay    : 1500,
    scale    : 1
  };

  var github = {
    origin   : "top",
    distance : "32px",
    duration : 600,
    delay    : 1800,
    scale    : 0
  };
*/
 // sr.reveal( ".fooContainer .item", { reset: true, origin: 'bottom',viewOffset: { top: 64 } } );

  function addCommasToNum( num ){
    return num.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
  }
  
  var crown = document.querySelector(".fooContainer");
 // var demo  = document.querySelector(".fooContainer");

  window.addEventListener( "scroll", scrollBrain, false );

  var body = document.body,
      html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight,
                         html.clientHeight, html.scrollHeight, html.offsetHeight );

  function scrollBrain(){

    if ( window.pageYOffset >= crown.offsetTop + 64 ){
      return crown.classList.add("visible")
    }
    if ( crown.classList.contains("visible") ){
      return crown.classList.remove("visible");
    }
    if ( window.pageYOffset >= 0.85 * ( height - window.clientHeight ) ) {
      _gaq.push([ '_trackEvent', 'Behavior', 'Scroll', 'Viewed the entire page.']);
    }
  }
  equalheight = function(container){
  var currentTallest = 0,
   currentRowStart = 0,
   rowDivs = new Array(),
   $el,
   topPosition = 0;
  $(container).each(function() {

  $el = $(this);
  $($el).height('auto')
  topPostion = $el.position().top;

  if (currentRowStart != topPostion) {
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
   rowDivs.length = 0; // empty the array
   currentRowStart = topPostion;
   currentTallest = $el.height();
   rowDivs.push($el);
  } else {
   rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  }

  $(window).load(function() {
    equalheight('.post-product');
    equalheight('.height-b');
    equalheight('.height-block');
  });


  $(window).resize(function(){
    equalheight('.post-product');
    equalheight('.height-b');
    equalheight('.height-block');
  });
  if($.fn.isotope){
        init_blog_masonry_isotope();
  }
});

// ============================================================================
// Isotope for masonry Blog
// ============================================================================

function init_blog_masonry_isotope()
{
   // Isotope
   $('.blog-posts').isotope({
      itemSelector: '.isotope-item',
      resizable: false,
      layoutMode: 'masonry'
   });

   // Redo isotope when image loaded
   $('.blog-posts img').one('load', function() {
      $('.blog-posts').isotope();
   }).each(function(){if(this.complete) $(this).load();});

   // Load more
   $('.footer-loadmore').on( 'click', function(e) {
      e.preventDefault();
      var $this = $(this).hide();
      var $spinner = $(this).siblings('.loading-spinner').show();

      // ===== Demo code, just clones current items, needs to be replaced by actual one =====
         var $elems = $('.isotope-item').clone(true).slice(0,12);
         setTimeout(function(){
            // append elements to container
            $('.blog-posts').append( $elems )
               // add and lay out newly appended elements
               .isotope( 'appended', $elems );
            $spinner.hide();
            $this.show();
         }, 500);
      // Edn Demo code
   });
} 