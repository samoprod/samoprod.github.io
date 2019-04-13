$(function () {

	/* Top menu toggle function */
	$("#toggle-top-menu").click(function () {
		$("#toggle-top-menu__plate").toggleClass("active");
		$("#top-menu-js").toggleClass("top-menu_active");
		$("body").toggleClass("ovh");
	});

	$('#bg-close').click(function () {
		$("#toggle-top-menu__plate").removeClass('active');
		$('#top-menu-js').removeClass("top-menu_active");
		$('body').removeClass("ovh");
	});



	/* Prevent horizontal scroll */
	$(window).scroll(function () {
		$("body, html").scrollLeft(0);
		$(window).scrollLeft(0);
	});


	/* Magnific Popup */
	$("a[href='#popup-favorites'], a[href='#popup-cart']").magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		removalDelay: 500,
		mainClass: 'mfp-fade',
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});


	/* Delete Favorites/Cart item functions */
	$('.pop-item__delete').click(function () {
		var th = $(this);
		th.parent().addClass("pop-item_deleted");
		setTimeout(function () {
			th.parent().remove();
		}, 1000);
	});

	// Close SALE block
	$(".top-sale-line__close").click(function () {
		$(".top-sale-line").stop().slideUp();
	});


	$(".top-categories__toggle").click(function () {
		$(this).find(".hamburger").toggleClass("is-active");
		$(this).next().stop().slideToggle();
	});



	// Slick Big items

	$('.big-items').slick({
		infinite: false,
		mobileFirst: true,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					infinite: false,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false
				}
			},
		]
	});


	$('.slide-vertical').slick({
		infinite: false,
		mobileFirst: true,
		arrows: false,
		dots: true,
		draggable: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					infinite: false,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false
				}
			},
		]
	});


	$(".slide-items").slick({
		verticalSwiping: true,
		mobileFirst: true,
		draggable: false,
		vertical: true,
		dots: false,
		nextArrow: "<button class='vert-arr vert-arr_next'><svg><use href='#up-arrow'></use></svg></button>",
		prevArrow: "<button class='vert-arr vert-arr_prev'><svg><use href='#down-arrow'></use></svg></button>",
		dots: true
	});

});


$(document).ready(function () {
	var waypointsvg = new Waypoint({
		element: $(".how-to"),
		handler: function (dir) {
			if (dir === "down") {
				$(".ht-trg").each(function (index) {
					var ths = $(this);
					setTimeout(function () {
						var myAnimation = new DrawFillSVG({
							elementId: "ht-trg-" + (index + 1)
						});
					}, 600 * index);
				});
			};
			this.destroy();
		},
		offset: '50%'
	});


	var waypointsvg = new Waypoint({
		element: $(".how-to__avg-wrap"),
		handler: function (dir) {
			if (dir === "down") {
				$(".avg-item").each(function (index) {
					var ths = $(this);
					setTimeout(function () {
						$(".avg-item").eq(index).addClass("zoomIn");
					}, 300 * index);
				});
			};
			this.destroy();
		},
		offset: '80%'
	});



});

$(window).on("load", function () {
	$("body, html").removeClass("ovh");
	$(".preloader-wrap").stop().fadeOut();
});