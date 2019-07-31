$(function() {

	// Sidebar & Logo Toggle
	$('.sidebar-toggle').on('click', 'a', function(e) {
		e.preventDefault();
		
		// Logo
		$('.large-logo').toggleClass('large-logo-hide');
		$('.logo').toggleClass('mobile-logo').find('.mobile-logo-item').toggleClass('mobile-logo-item-show');

		// Sidebar
		$('.sidebar').toggleClass('sidebar-sm');
	});

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
	});

	// Content
	$('.content-wrapper').css({ 'min-height' : ( $(window).height() - 46 ) + 'px' });

});