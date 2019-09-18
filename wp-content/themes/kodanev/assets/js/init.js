jQuery(document).ready(function ($) {
	//	materialize default parallax
	$('.parallax').parallax();

	//	rotating hamburger menu icon in header on handys
	(function () {

		"use strict";

		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener("click", function (e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
			});
		}

	})();

	/*for more examples and further explanation head over http://codepen.io/spirit-infernal/pen/bVZerM and feel free to use one of them at your projects*/

	$('.c-hamburger').sideNav({
		edge: 'left', // Choose the horizontal origin
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	});

	//	hack for changing name from ru to en when page have a hreflang attr = en
	var headName = $('header h1'),
		pageLang = document.documentElement.lang;
	//	another hack to determine on which language will be displayed chip with download link
	if (pageLang == 'en-US') {
		headName.text('Viktor Kodanev');
		if ($('body').hasClass('page-id-74')) {
			var downTarget = $('.download-attachments').find('a[title*="РУС"]');
			downTarget.parent('.downloader').addClass('hide');
		}
	var activeTab = $(".pagenav").find("a[href*='" + window.location.pathname + "']");
	$(activeTab).addClass('active');
	if ($('body').hasClass('home page page-id-28')) {
		$('.pagenav a').removeClass('active');
		$('a[href$="http://viktor-kodanev.com/en/"]').addClass('active');
	}
	var mobActiveTab = $(".navbar-fixed .links").find("a[href*='" + window.location.pathname + "']");
	$(mobActiveTab).addClass('active');
	if ($('body').hasClass('home page page-id-28')) {
		$('.navbar-fixed .links a').removeClass('active');
		$('a[href$="http://viktor-kodanev.com/en/"]').addClass('active');
	}
	} else {
		headName.text('Виктор Коданев');
		if ($('body').hasClass('page-id-74')) {
			var downTarget = $('.download-attachments').find('a[title*="ENG"]');
			downTarget.parent('.downloader').addClass('hide');
		}
			//	sidenav proper presentation for which page currently opened and hack for main page in case that we have no posts, only pages
	var activeTab = $(".pagenav").find("a[href*='" + window.location.pathname + "']");
	$(activeTab).addClass('active');
	if ($('body').hasClass('home page page-id-28')) {
		$('.pagenav a').removeClass('active');
		$('a[href$="http://viktor-kodanev.com/"]').addClass('active');
	}
	var mobActiveTab = $(".navbar-fixed .links").find("a[href*='" + window.location.pathname + "']");
	$(mobActiveTab).addClass('active');
	if ($('body').hasClass('home page page-id-28')) {
		$('.navbar-fixed .links a').removeClass('active');
		$('a[href$="http://viktor-kodanev.com/"]').addClass('active');
	}
	}

$('#commentsText').val('').trigger('autoresize');
//animation for download link chip
	if ($('body').hasClass('page-id-74')) {
		$('.downloader a span').velocity({
			queue: false,
			duration: 0,
			marginLeft: '-20px',
			opacity: '0'
		}).clearQueue();

		$('.downloader').on('mouseenter', function () {
			$(this).find('a span').velocity({
				queue: true,
				duration: 250,
				marginLeft: '10px',
				opacity: '1'
			}).clearQueue();
			$(this).find('a').removeClass('white-text').css({
				color: '#2962ff'
			});
		});

		$('.downloader').on('mouseleave', function () {
			$(this).find('a span').velocity({
				queue: true,
				duration: 250,
				marginLeft: '-20px',
				opacity: '0'
			}).clearQueue();
			$(this).find('a').addClass('white-text').css({
				color: '#fff'
			});
		});
	}
	//	icons in footer animation
	$('footer .circle').on('mouseenter', function () {
		$(this).css({
			backgroundColor: '#fff',
			'transition-duration': '.5s',
			'-moz-transition-duration': '.5s',
			'-webkit-transition-duration': '.5s',
			'-o-transition-duration': '.5s',
		});
		$(this).find('.icon').css({
			color: '#122c55',
			'transition-duration': '.5s',
			'-moz-transition-duration': '.5s',
			'-webkit-transition-duration': '.5s',
			'-o-transition-duration': '.5s',
		});
	});
	$('footer .circle').on('mouseleave', function () {
		$(this).css({
			backgroundColor: '#122c55',
			'transition-duration': '.5s',
			'-moz-transition-duration': '.5s',
			'-webkit-transition-duration': '.5s',
			'-o-transition-duration': '.5s',
		});
		$(this).find('.icon').css({
			color: '#fff',
			'transition-duration': '.5s',
			'-moz-transition-duration': '.5s',
			'-webkit-transition-duration': '.5s',
			'-o-transition-duration': '.5s',
		});
	});
});
