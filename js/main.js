$(function() {

	// Submenu
	$('.sidebar-menu').on('click', 'a', function(e) {
		var $this = $(this);

		$('.sidebar-menu').find('a').not($this).removeClass('active')
			.parent().find('.submenu').slideUp();


		if( $this.next().hasClass('submenu') ) {
			e.preventDefault();

			if( $this.hasClass('active') )
				$this.removeClass('active');
			else
				$this.addClass('active');
			
			$this.parent().find('.submenu').slideToggle();

		}
	})

});