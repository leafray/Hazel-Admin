$(function() {

	// Sidebar & Logo Toggle
	$('.sidebar-toggle').on('click', 'a', function(e) {
		e.preventDefault();
		
		// Logo
		$('.large-logo').toggleClass('large-logo-hide');
		$('.logo').toggleClass('mobile-logo').find('.mobile-logo-item').toggleClass('mobile-logo-item-show');

		// Sidebar
		$('.sidebar').toggleClass('sidebar-sm');

		// Content
		$('.content-wrapper').toggleClass('sm-content-wrapper');
	});

	// Submenu
	var contentId = $('.main-content').find('.content-header').data('id');
	$('#' + contentId).addClass('active').find('.submenu').show();

	$('.sidebar-menu').on('click', 'a', function(e) {
		var $this = $(this);

		$('.sidebar-menu').find('a').not($this)
			.parent().removeClass('active').find('.submenu').slideUp();
		
		if( $this.next().hasClass('submenu') ) {
			e.preventDefault();

			if( $this.parent().hasClass('active') ) {
				$this.parent().removeClass('active').find('.submenu').slideUp();
			}
			else {
				$this.parent().addClass('active').find('.submenu').slideDown();
			}
			

		}
	});

	// Content
	$('.content-wrapper').css({ 'min-height' : ( $(window).height() - 46 ) + 'px' });


});