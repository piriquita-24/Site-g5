(function(){

	// USAGE EXAMPLES

	$('.usage_example').on('click', function(){
		
		var $this 	= $(this);
		var $show 	= $($this.attr('data-show'));

		$('#example_1, #example_2, #example_3, #example_4').hide().removeClass('wcs-show');;
		
		$show.slideDown(300, function(){
			setTimeout(function(){
				$show.find('.wcs_button').trigger('click');
			}, 200);
		});

	});

	// CHANGE EFFECT OF THE POPUP

	$('#change_effect').on('change', function(){
		var current 	= $(this).val();
		var items 		= $('.whatsapp_chat_support');
		items.removeClass(function(index, className){
			return (className.match (/(^|\s)wcs-effect\S+/g) || []).join(' ');
		});

		items.each(function(){
			$(this).addClass('wcs-effect-'+current);
		});
	});
	$('#change_effect').trigger('change');

})();