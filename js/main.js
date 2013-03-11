$(document).on('pop-initialized', function(){
 
 	
  $('.asset').live('initialize', function(e, asset){

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
	
});

