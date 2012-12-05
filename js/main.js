$(document).on('pop-initialized', function(){
 
 	
  $('.asset').live('initialize', function(e, asset){

		$("a.fancybox").fancybox();

    $('.asset-type-imagegroup .slideshow .images').each(function() {
    	var $this = $(this);
    	$this.cycle({
				fx: 'fade',
				timeout: Math.floor(Math.random() * 8000) + 3000,
				delay: Math.floor(Math.random() * 6000) + 1000
	    });
		});

  });


  $('.asset').live('destroy', function(e, asset){
		
  });
  

/*
  $('.columnizer-col3 .body, .columnizer-col4 .body,.columnizer-col5 .body,.columnizer-col6 .body').expander({
	  slicePoint: 270,
	  widow: 2,
	  expandEffect: 'show',
	  userCollapseText: '[<]',
	  expandText: '[…]'
	});
*/
	
	/* $('.asset-type-text.asset-size-1 .body, .asset-type-text.asset-size-2 .body').columnize({ columns: 2 }); */

	
});

