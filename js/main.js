$(function() {

	$.sideMobile = function() {

	}

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

	$.sidebarMobile = function() {
		// window width (ww)
		var ww = $(document).outerWidth();

		if( ww <= 767 ) {
			$('.large-logo').addClass('large-logo-hide');
			$('.logo').addClass('mobile-logo').find('.mobile-logo-item').addClass('mobile-logo-item-show');

			// Sidebar
			$('.sidebar').addClass('sidebar-sm');

			// Content
			$('.content-wrapper').addClass('sm-content-wrapper');
		}
		else {
			$('.large-logo').removeClass('large-logo-hide');
			$('.logo').removeClass('mobile-logo').find('.mobile-logo-item').removeClass('mobile-logo-item-show');

			// Sidebar
			$('.sidebar').removeClass('sidebar-sm');

			// Content
			$('.content-wrapper').removeClass('sm-content-wrapper');
		}

	}

	$(document).ready(function() {
		$.sidebarMobile();
	});

	var resizeTimer;
	$(window).on('resize', function(e) {
		clearTimeout(resizeTimer);

		resizeTimer = setTimeout(function() {
			$.sidebarMobile();
		}, 500);
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